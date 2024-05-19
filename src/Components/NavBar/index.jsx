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
} from "react-icons/fa";
import Link from "next/link";

const links = [
  { href: "/", text: "Home", icon: FaHome },
  { href: "/standings", text: "Standings", icon: FaTrophy },
  { href: "/results", text: "Results", icon: FaFlagCheckered },
  { href: "/drivers", text: "Drivers", icon: FaUser },
  { href: "/schedule", text: "Schedule", icon: FaCalendarAlt },
  { href: "/constructors", text: "Constructors", icon: FaCar },
];

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="#050505bd" px={4} w="100%">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Image
            src="https://i.postimg.cc/SRNkp0rT/f1-roster-icon.png"
            alt="f1 roster icon"
            width="90px"
            height="90px"
          />
        </Box>
        <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
          {links.map(({ href, text, icon: Icon }, index) => (
            <ChakraLink key={index} as={Link} href={href} color="red" fontWeight={600} fontSize=".9rem" display="flex" flexDir="column" justifyContent="center" alignItems="center" w="90px" h="60px" borderRadius="10px" _hover={{textDecor: "none", bgColor: "#454545"}}>
              <Icon />
              {text}
            </ChakraLink>
          ))}
        </HStack>
        <IconButton
          size="md"
          icon={isOpen ? <FaTimes /> : <FaBars />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>

      {isOpen && (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={4}>
            {links.map(({ href, text, icon: Icon }, index) => (
              <ChakraLink key={index} as={Link} href={href} color="white">
                <Icon />
                {text}
              </ChakraLink>
            ))}
          </Stack>
        </Box>
      )}
    </Box>
  );
}
