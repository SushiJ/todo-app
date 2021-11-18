import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { HStack } from "@chakra-ui/layout";
import React from "react";
import { useRef } from "react";
import uniqueId from "uniqid";
import { useToast } from "@chakra-ui/react";

interface SetTodo {
  addTodo: (todo: { id: string; text: string }) => void;
}

const AddTodo: React.FC<SetTodo> = ({ addTodo }) => {
  const toast = useToast();

  const textRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const textValue = textRef.current!.value;

    if (!textValue) {
      toast({
        title: "Cannot add empty todo",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    const todo = { id: uniqueId(), text: textValue };
    addTodo(todo);

    textRef.current!.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt={8}>
        <Input variant="filled" ref={textRef} placeholder="Add a new todo" />
        <Button colorScheme="pink" type="submit" px={8}>
          Add Todo
        </Button>
      </HStack>
    </form>
  );
};

export default AddTodo;
