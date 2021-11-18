import { VStack } from "@chakra-ui/layout";
import React from "react";
import AddTodo from "./components/AddTodo";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import { useState, useEffect } from "react";
import { useColorMode } from "@chakra-ui/color-mode";

interface TodoType {
  id: string;
  text: string;
}
const App: React.FC = () => {
  const initialTodos = localStorage.getItem("todo") || "";
  const [todos, setTodos] = useState<Array<TodoType>>(
    JSON.parse(initialTodos) || []
  );

  const deleteTodos = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = (todo: { id: string; text: string }) => {
    setTodos([...todos, todo]);
  };

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack p={1} maxW="1440px" m="auto">
      <Navbar toggleColorMode={toggleColorMode} colorMode={colorMode} />
      <TodoList todos={todos} deleteTodo={deleteTodos} />
      <AddTodo addTodo={addTodo} />
    </VStack>
  );
};

export default App;
