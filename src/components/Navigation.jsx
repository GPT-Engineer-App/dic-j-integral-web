import { Link } from "react-router-dom";
import { HStack, Button } from "@chakra-ui/react";

const Navigation = () => {
  return (
    <HStack spacing={4} padding={4}>
      <Button as={Link} to="/" colorScheme="teal">
        Home
      </Button>
      <Button as={Link} to="/calculation-process" colorScheme="teal">
        Calculation Process
      </Button>
    </HStack>
  );
};

export default Navigation;
