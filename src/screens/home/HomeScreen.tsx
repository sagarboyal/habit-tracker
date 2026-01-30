import { RootState } from "@/src/store/rootStore";
import { addGoal, removeGoal } from "@/src/store/slice/goalSlice";
import React, { useEffect } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const HomeScreen = () => {
  const goals = useSelector((state: RootState) => state.goal.goals);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(removeGoal("324532244125.5818"));
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HomeScreen</Text>
      <FlatList
        style={{ flex: 1 }}
        keyExtractor={(item) => item.id}
        data={goals}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 10,
            }}
          >
            <Text style={styles.goalText}>{item.text}</Text>
            <Button
              title="delete"
              onPress={() => dispatch(removeGoal(item.id.toString()))}
            />
          </View>
        )}
      />
      <Button title="add" onPress={() => dispatch(addGoal("dummy goal"))} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  goalText: { fontSize: 16, marginVertical: 4 },
});

export default HomeScreen;
