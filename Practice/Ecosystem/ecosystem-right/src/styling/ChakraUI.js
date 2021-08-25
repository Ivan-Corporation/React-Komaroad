import { Box, Text, Button, SimpleGrid } from "@chakra-ui/react"

function ChakraUI() {
  return ( <>
        <Box w="100%" h="200px" bgGradient="linear(to-t, green.200, pink.500)"/>





        <Text
          bgGradient="linear(to-l, #7928CA,#FF0080)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
        >
          Welcome to Chakra UI
        </Text>


        <Button
          colorScheme="teal"
          _hover={{
            background: "white",
            color: "teal.500",
          }}
        >
          Кнопкинс
        </Button>
      
        <Box
          role="group"
        >
          <Box
            _hover={{ fontWeight: 'semibold' }}
            _groupHover={{ color: 'tomato' }}
          >
          </Box>
        </Box>


        <Text
          bgGradient="linear(to-l, #232132,#FF1111)"
          bgClip="text"
          fontSize="4xl"
          fontWeight="extrabold"       
        >
          Тени
        </Text>


        <SimpleGrid
          bg="gray.50"
          columns={{ sm: 2, md: 4 }}
          spacing="8"
          p="10"
          textAlign="center"
          rounded="lg"
          color="gray.400"
        > 
          <Box boxShadow="xs" p="6" rounded="md" bg="white">
            xs
          </Box>
          <Box boxShadow="sm" p="6" rounded="md" bg="red">
            sm
          </Box>
          <Box boxShadow="base" p="6" rounded="md" bg="green">
            Base
          </Box>
          <Box boxShadow="md" p="6" rounded="md" bg="white">
            md
          </Box>
          <Box boxShadow="lg" p="6" rounded="md" bg="white">
            lg
          </Box>
          <Box boxShadow="xl" p="6" rounded="md" bg="white">
            xl
          </Box>
          <Box boxShadow="2xl" p="6" rounded="md" bg="white">
            2xl
          </Box>
          <Box boxShadow="dark-lg" p="6" rounded="md" bg="white">
            Dark lg
          </Box>
          <Box boxShadow="outline" p="6" rounded="md" bg="white">
            Outline
          </Box>
          <Box boxShadow="inner" p="6" rounded="md" bg="white">
            Inner
          </Box>
        </SimpleGrid>
        
        </>
  );
}

export default ChakraUI;
