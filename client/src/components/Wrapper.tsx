import { VStack } from "@chakra-ui/layout";
import React from "react";

const Wrapper = ({ children }: any) => {
  return (
    <VStack p={1} maxW="1440px" m="auto">
      {children}
    </VStack>
  );
};

export default Wrapper;
