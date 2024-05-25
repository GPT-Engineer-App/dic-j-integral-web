import React, { useState } from "react";
import { Container, VStack, Text, Button, Input, Image, Box, useToast } from "@chakra-ui/react";
import { FaSearch, FaCalculator, FaInfoCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const toast = useToast();

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    setImages(files);
    toast({
      title: "Images uploaded.",
      description: `${files.length} images have been uploaded.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleImageClick = (image) => {
    setSelectedImage(URL.createObjectURL(image));
  };

  const handleAnalyzeDIC = () => {
    // Placeholder for DIC analysis logic
    toast({
      title: "DIC Analysis",
      description: "DIC analysis has been performed.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleCalculateJIntegral = () => {
    // Placeholder for J-integral calculation logic
    toast({
      title: "J-Integral Calculation",
      description: "J-integral has been calculated.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">J-Integral Calculation from DIC Data</Text>
        <Input type="file" accept="image/*" multiple onChange={handleImageUpload} />
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          {images.map((image, index) => (
            <Box key={index} m={2} onClick={() => handleImageClick(image)}>
              <Image src={URL.createObjectURL(image)} boxSize="100px" objectFit="cover" cursor="pointer" />
            </Box>
          ))}
        </Box>
        {selectedImage && (
          <Box>
            <Image src={selectedImage} boxSize="300px" objectFit="cover" />
          </Box>
        )}
        <Button leftIcon={<FaSearch />} colorScheme="teal" onClick={handleAnalyzeDIC}>
          Analyze DIC
        </Button>
        <Button leftIcon={<FaCalculator />} colorScheme="teal" onClick={handleCalculateJIntegral}>
          Calculate J-Integral
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
