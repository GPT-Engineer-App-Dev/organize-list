import { Box, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box bg="blue.800" p={4} color="white">
      <Heading as="h1" size="lg" textAlign="center">
        My Todo List
      </Heading>
    </Box>
  );
};

export default Header;
