import Footer from "@/Components/Footer";
import HomeContent from "@/Components/HomeContent";
import {
  Image,
  Center,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Center flexDir="column">
      <Box w="100%" position="relative">
        <Image
          src="https://boletimdopaddock.com.br/wp-content/uploads/2024/04/Formula-1-largada-scaled.jpg"
          h="300px"
          w="100%"
          objectFit="cover"
          alt="Race Start Australia 2024"
        />
        <Center
          flexDir="column"
          w="100%"
          h="100%"
          bgColor="#151515c5"
          position="absolute"
          top="0"
          left="0"
        >
          <Box>
            <Heading> Welcome to F1 Roster</Heading>
            <Text fontSize={18} fontWeight={500} maxW="95dvw" mt={2}>
              Here you can find the latest infos about the current Formula 1
              season, including:
            </Text>
          </Box>
        </Center>
      </Box>
      <HomeContent />
      <Footer />
    </Center>
  );
}
