import { IconButton } from "@chakra-ui/button";
import { Heading, HStack, Spacer } from "@chakra-ui/layout";

import { FaSun, FaMoon } from "react-icons/fa";

interface ToggleColor {
  toggleColorMode: () => void;
  colorMode: any;
}

const Navbar: React.FC<ToggleColor> = ({ colorMode, toggleColorMode }) => {
  return (
    <HStack w="full" p={4}>
      <Heading>Todo</Heading>
      <Spacer />
      <IconButton
        onClick={() => toggleColorMode()}
        aria-label=""
        icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
        size="lg"
      />
    </HStack>
  );
};

export default Navbar;
