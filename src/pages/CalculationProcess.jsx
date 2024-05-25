import React from "react";
import { Container, VStack, Text, Box } from "@chakra-ui/react";

const CalculationProcess = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Calculation Process</Text>
        <Box>
          <Text>Step 1: Upload Images</Text>
          <Text>Step 2: Analyze DIC</Text>
          <Text>Step 3: Determine Crack Tip</Text>
          <Text>Step 4: Plan Integration Area</Text>
          <Text>Step 5: Calculate J-Integral</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default CalculationProcess;
