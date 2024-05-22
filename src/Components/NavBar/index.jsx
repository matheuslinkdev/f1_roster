"use client";

import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Link as ChakraLink,
  Image,
  Text
} from "@chakra-ui/react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaTrophy,
  FaFlagCheckered,
  FaUser,
  FaCalendarAlt,
  FaCar,
  FaNewspaper,
} from "react-icons/fa";
import Link from "next/link";
import navBarLinks from "@/data/navBarLinks";

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bg="common.950"
      px={4}
      w="100%"
      h={{base: "8dvh", md: "10dvh"}}
      alignItems="center"
      position="relative"
      zIndex={10}
    >
      <Flex h="100%" alignItems="center" justifyContent="space-between">
        <Box h="100%" display="flex" alignItems="center" cursor="pointer">
           <Link href="/">
          <Image
            src="https://i.postimg.cc/SRNkp0rT/f1-roster-icon.png"
            alt="f1 roster icon"
            width="90px"
            height="90px"
            ml="-5px"
          />
        </Link>
        </Box>
        <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }} maxW={"80%"}>
          {navBarLinks.map(({ href, text }, index) => (
            <ChakraLink
              key={index}
              as={Link}
              href={href}
              display="flex"
              flexDir="column"
              justifyContent="center"
              alignItems="center"
              w="110px"
              h="60px"
              borderRadius="10px"
              transition=".3s ease"
              _hover={{ textDecor: "none", bgColor: "common.800" }}
            >
              <Text fontSize={18} fontWeight={500}>{text}</Text>
            </ChakraLink>
          ))}
        </HStack>
        <IconButton
          fontSize={28}
          icon={isOpen ? <FaTimes /> : <FaBars />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
          bgColor="transparent"
          _hover={{bgColor: "transparent"}}
        />
      </Flex>

      {isOpen && (
        <Box
          p={4}
          bgColor="common.900"
          position="absolute"
          top="100%"
          left={0}
          w="100%"
          zIndex={20}
        >
          <Stack as="nav" spacing={4}>
            {navBarLinks.map(({ href, text }, index) => (
              <ChakraLink key={index} as={Link} href={href} color="white" display="flex" alignItems="center" justifyContent="center" h="45px" border="1px solid #fff" borderRadius="25px" onClick={onClose}>
                <Text ml={1} fontSize={20}>
                {text}
                </Text>
              </ChakraLink>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
}
