import React from "react";
import { Container, VStack, Text, Box } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const CalculationProcess = () => {
  const location = useLocation();
  const { calculatedValues } = location.state || {};
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
        {calculatedValues && (
          <Box>
            <Text fontSize="xl">Calculated Values:</Text>
            <Text>Value 1: {calculatedValues.value1}</Text>
            <Text>Value 2: {calculatedValues.value2}</Text>
            <Text>Value 3: {calculatedValues.value3}</Text>
          </Box>
        )}
        {calculatedValues && (
          <Box>
            <Text fontSize="xl">Calculated Values:</Text>
            <Text>Value 1: {calculatedValues.value1}</Text>
            <Text>Value 2: {calculatedValues.value2}</Text>
            <Text>Value 3: {calculatedValues.value3}</Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default CalculationProcess;
