import { IconButton } from "@chakra-ui/button";
import {
  Badge,
  Divider,
  HStack,
  Spacer,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/layout";
import { FaTrash } from "react-icons/fa";

interface TodoListProps {
  todos: { id: string; text: string }[];
  deleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo }) => {
  if (!todos.length) {
    return (
      <Badge borderRadius="lg" mt={2} p={2} colorScheme="green">
        No Todos
      </Badge>
    );
  }

  return (
    <VStack
      divider={<StackDivider />}
      borderColor="gray.200"
      borderWidth="2px"
      p={4}
      borderRadius="lg"
      w="100%"
      maxW={{ base: "90vw", sm: "90vw", lg: "50vw", xl: "40vw" }}
    >
      {todos.map((todo, index) => (
        <HStack w="full" key={todo.id}>
          <Text
            pr={2}
            borderRight="2px"
            borderColor="gray.100"
            fontWeight="bold"
            fontSize="xl"
          >
            {index > 10 ? index : `0${index}.`}
          </Text>
          <Text>{todo.text}</Text>
          <Spacer />
          <IconButton
            aria-label=""
            onClick={() => deleteTodo(todo.id)}
            icon={<FaTrash />}
            isRound={true}
          />
        </HStack>
      ))}
    </VStack>
  );
};

export default TodoList;
