import { Center, Heading, Text } from "@chakra-ui/react"

const WorkInProgress = () => {
  return (
    <Center h="80dvh" flexDir="column">
      <Heading mb={4} size="lg" fontWeight={400}>
        Work in progress...
      </Heading>
      <Text fontSize={20}>
        Some infos are currently not available due API limitations.
      </Text>
    </Center>
  )
}

export default WorkInProgress