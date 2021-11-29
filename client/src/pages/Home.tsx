import { VStack } from "@chakra-ui/layout";
import { useColorMode } from "@chakra-ui/system";
import { useState, useEffect } from "react";
import AddTodo from "../components/AddTodo";
import Navbar from "../components/Navbar";
import TodoList from "../components/TodoList";
import Wrapper from "../components/Wrapper";

interface TodoType {
  id: string;
  text: string;
}

function Home() {
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
    <Wrapper>
      <Navbar toggleColorMode={toggleColorMode} colorMode={colorMode} />
      <TodoList todos={todos} deleteTodo={deleteTodos} />
      <AddTodo addTodo={addTodo} />
    </Wrapper>
  );
}

export default Home;
