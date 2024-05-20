"use client";

import Link from "next/link";
import { MdOutlineNavigateNext } from "react-icons/md";

import {
  Center,
  List,
  Text,
  Heading,
  Card,
  CardBody,
  Button,
  Spacer,
  Icon,
} from "@chakra-ui/react";

const homeLinks = [
  {
    href: "/standings",
    title: "Standings",
    description: "See the current driver championship standings.",
    bgUrl:
      "https://cdn.racingnews365.com/2024/_1092x683_crop_center-center_85_none/XPB_1260680_HiRes.jpg?v=1709109509",
  },
  {
    href: "/results",
    title: "Results",
    description: "See all of the latest results of the races.",
    bgUrl:
      "https://i2-prod.mirror.co.uk/incoming/article32220702.ece/ALTERNATES/n615/0_GettyImages-1642562666.jpg",
  },
  {
    href: "/drivers",
    title: "Drivers",
    description: "See the current drivers of the 2024 Formula One grid.",
    bgUrl:
      "https://e0.365dm.com/24/02/2048x1152/skysports-f1-drivers-2024-bahrain-testing_6471410.jpg?20240227200127",
  },
  {
    href: "/schedule",
    title: "Schedule",
    description: "See all the info about the season schedule.",
    bgUrl:
      "https://cdn-8.motorsport.com/images/amp/2d1Zz5LY/s1000/max-verstappen-red-bull-racing.jpg",
  },
];

const HomeContent = () => {
  return (
    <Center w="100%" flexDir="column">
      <List
        display="flex"
        flexWrap="wrap"
        gap="15px"
        flexDir={{ base: "column", md: "row" }}
        w="95dvw"
        justifyContent="space-evenly"
        mt={10}
        mx="auto"
      >
        {homeLinks.map((link, index) => (
          <Card
            key={index}
            align="center"
            bgColor="red.950"
            w={310}
            maxW="95dvw"
            h={160}
            bgImage={link.bgUrl}
            bgSize="cover"
            m="auto"
            borderRadius="10px"
            overflow="hidden"
          >
            <Center
              bgColor="#151515c7"
              w="100%"
              h="100%"
              flexDir="column"
              alignItems="flex-start"
              p={4}
              transition=".3s ease"
              _hover={{ bgColor: "#151515b2" }}
            >
              <Heading size="md" color="white" mb={1} fontWeight={400}>
                {" "}
                {link.title}
              </Heading>
              <CardBody p={0}>
                <Text fontWeight={500} color="white">
                  {link.description}
                </Text>
              </CardBody>
              <Spacer />
              <Link href={link.href}>
                <Button
                  bgColor="red.800"
                  fontWeight={400}
                  _hover={{ bgColor: "red.700" }}
                  mb="2px"
                  color="white"
                  display="flex"
                  alignItems="center"
                >
                  {link.title} <Icon as={MdOutlineNavigateNext} mt="4px" />
                </Button>
              </Link>
            </Center>
          </Card>
        ))}
      </List>
    </Center>
  );
};

export default HomeContent;
