import { resetAllGoals as resetGoal } from "@/src/store/slice/goalSlice";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useEffect, useRef } from 'react';
import { AppState, AppStateStatus } from 'react-native';
import { useDispatch } from 'react-redux';

const LAST_RESET_KEY = '@goals_last_reset_date';

export function useGoalsDailyReset() {
  const dispatch = useDispatch();
  const appState = useRef(AppState.currentState);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const resetAllGoals = useCallback(async () => {
    console.log('Resetting all goals...');
    dispatch(resetGoal());

    const today = new Date().toDateString();
    await AsyncStorage.setItem(LAST_RESET_KEY, today);
  }, [dispatch]);

  const checkAndResetIfNeeded = useCallback(async () => {
    try {
      const lastResetDate = await AsyncStorage.getItem(LAST_RESET_KEY);
      const today = new Date().toDateString();

      if (lastResetDate !== today) {
        console.log('Goals need reset - last reset:', lastResetDate, 'today:', today);
        await resetAllGoals();
      }
    } catch (error) {
      console.error('Error checking reset status:', error);
    }
  }, [resetAllGoals]);

  const getMillisecondsUntilMidnight = useCallback((): number => {
    const now = new Date();
    const midnight = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1,
      0, 0, 0, 0
    );
    return midnight.getTime() - now.getTime();
  }, []);

  const setupMidnightTimer = useCallback(() => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }

    const msUntilMidnight = getMillisecondsUntilMidnight();
    console.log(`Goals will reset in ${Math.round(msUntilMidnight / 1000 / 60)} minutes`);

    timeoutRef.current = setTimeout(() => {
      console.log('Midnight reached - resetting goals');
      resetAllGoals();

      intervalRef.current = setInterval(() => {
        console.log('Daily interval - resetting goals at midnight');
        resetAllGoals();
      }, 24 * 60 * 60 * 1000);
    }, msUntilMidnight);
  }, [getMillisecondsUntilMidnight, resetAllGoals]);

  useEffect(() => {
    checkAndResetIfNeeded();
    setupMidnightTimer();

    const subscription = AppState.addEventListener('change', (nextAppState: AppStateStatus) => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        console.log('App has come to foreground - checking if reset is needed');
        checkAndResetIfNeeded();
        setupMidnightTimer();
      }
      appState.current = nextAppState;
    });

    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
      subscription.remove();
    };
  }, [checkAndResetIfNeeded, setupMidnightTimer]);

  return { resetAllGoals };
}