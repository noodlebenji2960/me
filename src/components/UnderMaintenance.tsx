import React, { FunctionComponent } from "react";
import { Box, Center, Heading, Text, Button } from "@chakra-ui/react";
import { FiRefreshCcw } from "react-icons/fi";

export const UnderMaintenance: FunctionComponent = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <Center height="100vh">
      <Box textAlign="center">
        <Heading as="h1" size="xl" mb="4">
          👋 Hi i'm Ben
        </Heading>
        <Text fontSize="lg" mb="4">
          You can come here whenever you want but right now this site undergoing
          maintenance.
          <br />
          Please check back later.
        </Text>
        <Button
          leftIcon={<FiRefreshCcw />}
          colorScheme="blue"
          size="md"
          onClick={handleRefresh}
        >
          Refresh
        </Button>
      </Box>
    </Center>
  );
};
