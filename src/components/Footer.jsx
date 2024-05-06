import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="blue.800" p={4} color="white" textAlign="center">
      <Text>&copy; {new Date().getFullYear()} My Todo List</Text>
    </Box>
  );
};

export default Footer;
