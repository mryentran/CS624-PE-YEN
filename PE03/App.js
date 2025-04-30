import React, { useState } from 'react';
import { Text, View, ScrollView, StyleSheet, Button } from 'react-native';

import Heading from './Heading';
import Input from './Input';
import TodoList from './TodoList';
import Tab from './Tab';

let todoIndex = 0;

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [type, setType] = useState('All');

  const submitTodo = () => {
    if (inputValue.match(/^\s*$/)) {
      return;
    }

    const todo = {
      title: inputValue,
      todoIndex,
      complete: false,
    };
    todoIndex++;

    const newTodos = [...todos, todo];
    setTodos(newTodos);
    setInputValue('');
    console.log('State: ', { inputValue: '', todos: newTodos, type });
  };

  const deleteTodo = (index) => {
    const filteredTodos = todos.filter((todo) => todo.todoIndex !== index);
    setTodos(filteredTodos);
  };

  const toggleComplete = (index) => {
    const updatedTodos = todos.map((todo) =>
      todo.todoIndex === index
        ? { ...todo, complete: !todo.complete }
        : todo
    );
    setTodos(updatedTodos);
  };

  const inputChange = (text) => {
    console.log('Input Value:', text);
    setInputValue(text);
  };

  return (
    <View style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
        <Heading />
        <Input inputValue={inputValue} inputChange={inputChange} />
        <TodoList
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          todos={todos}
          type={type}
        />
        <Button title="Submit" onPress={submitTodo} />
      </ScrollView>
      <Tab 
        type={type}
        setType={setType}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
