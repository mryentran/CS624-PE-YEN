import React from 'react'
import { View } from 'react-native'
import Todo from './Todo'
const TodoList = ({ todos, deleteTodo, toggleComplete, type }) => {
    
  todos = todos.map((todo, i) => {
      if ((type === 'Active' && todo.complete) || (type === 'Complete' && !todo.complete))  {
        return null
      }
      return (
        <Todo
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          key={i}
          todo={todo} />
      )
    })
  
    return (
      <View>
        {todos}
      </View>
    )
  }
  
  export default TodoList