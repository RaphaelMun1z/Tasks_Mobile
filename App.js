import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList
} from "react-native";

import { FontAwesome } from "@expo/vector-icons"

import Task from "./src/Task";

const App = () => {
  const [task, setTask] = useState("")
  const [list, setList] = useState([
    {
      key: "1",
      item: "Comprar pão"
    },
    {
      key: "2",
      item: "Estudar React Native"
    }
  ])

  const handleAddTask = () => {
    if (task.trim() === "") {
      return
    }

    const data = {
      key: Date.now(),
      item: task
    }

    setList(oldArray => [data, ...oldArray])
    setTask("")
  }

  const handleDeleteTask = (item) => {
    let filterItem = list.filter((task) => {
      return (task.item !== item)
    })

    setList(filterItem)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas</Text>
      <View style={styles.containerInput}>
        <TextInput
          placeholder="Digite a tarefa..."
          style={styles.input}
          value={task}
          onChangeText={(text) => setTask(text)}
        />

        <TouchableOpacity style={styles.buttonAdd} onPress={handleAddTask}>
          <FontAwesome name="plus" size={20} color="#f5f5f5" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={list}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => <Task data={item} deleteItem={() => handleDeleteTask(item.item)} />}
        style={styles.list}
      />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#233445",
    paddingLeft: "5%",
    paddingRight: "5%",
    paddingTop: "15%",
  },
  title: {
    fontSize: 24,
    color: "#f5f5f5",
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 12,
  },
  containerInput: {
    flexDirection: 'row',
    width: "100%",
    height: 44,
    marginBottom: 22,
  },
  input: {
    width: "80%",
    backgroundColor: "#f5f5f5",
    height: 44,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  buttonAdd: {
    width: "15%",
    height: 44,
    backgroundColor: "#30475e",
    marginLeft: 8,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
  },
  list: {
    flex: 1,
  }
})