import { goalSliceProps } from '@/src/types/goalSlice';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: goalSliceProps = {
    goals: [],
};
const goalSlice = createSlice({
    name: "goal",
    initialState,
    reducers: {
        addGoal: (state, action: PayloadAction<string>) => {
            state.goals.push({
                id: (Math.random() * Date.now()).toString(),
                text: action.payload,
                status: false
            });
        },
        removeGoal: (state, action: PayloadAction<string>) => {
            state.goals = state.goals.filter(goal => goal.id !== action.payload);
        },
        toggleGoal: (state, action: PayloadAction<string>) => {
            const goal = state.goals.find(g => g.id === action.payload);
            if (goal) {
                goal.status = !goal.status;
            }
        },
        resetAllGoals: (state) => {
            state.goals = state.goals.map(goal => ({
                ...goal,
                status: false
            }));
        }
    }
});

export const { addGoal, removeGoal, toggleGoal, resetAllGoals } = goalSlice.actions;

export default goalSlice.reducer;