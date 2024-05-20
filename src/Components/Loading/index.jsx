import { Box, Spinner, Text } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Box
      style={{
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "25dvh",
      }}
    >
      <Spinner/>
      <Text>Loading...</Text>
    </Box>
  );
}

export default Loading