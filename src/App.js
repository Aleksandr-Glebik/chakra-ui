import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Container,
  Heading,
  Divider
} from '@chakra-ui/react';

import { Logo } from './Logo';
import Header from './components/Header';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Container maxW="container.lg">
        <Box py="2" textAlign={'center'}>
          <Heading size={'xl'}>
            Chakra UI Demo Page
          </Heading>
          <Text fontSize={'xl'}>Hello from Chakra UI Components</Text>
        </Box>
        <Divider />
      </Container>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>

          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
