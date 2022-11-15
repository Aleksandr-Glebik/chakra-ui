import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  // theme,
  Container,
  Heading,
  Divider,
  extendTheme
} from '@chakra-ui/react';

import { Logo } from './Logo';
import Header from './components/Header';
import CardList from './components/CardList';

const posts = [
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitaesequi sint nihil reprehenderit dolor beatae ea dolores nequefugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis  qui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut"
  },
  {
    userId: 1,
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit"
  },
  {
    userId: 1,
    id: 5,
    title: "nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque"
  },
  {
    userId: 1,
    id: 6,
    title: "dolorem eum magni eos aperiam quia",
    body: "ut aspernatur corporis harum nihil quis provident sequi mollitia nobis aliquid molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae"
  }]

  const theme = extendTheme({
    colors: {
      brand: {
        100: 'red',
        200: 'red',
        300: 'red',
        400: 'red',
        500: 'brown',
        600: 'brown',
        700: 'brown'
      }
    },
    components: {
      Button: {
        variants: {
          brand: props => ({
            bg: props.colorMode === 'dark' ? 'brand.300' : 'brand.700',
            color: 'white',
            _hover: {
              bg: props.colorMode === 'dark' ? 'brand.700' : 'brand.300',
            }
          })
        }
      }
    }
  })

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
        <CardList cards={posts}/>
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
