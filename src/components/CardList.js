import { SimpleGrid, Box, Button, Heading, Text } from '@chakra-ui/react'

const CardList = (props) => {
    const {cards = []} = props

    return (
        <SimpleGrid columns={[1, null, 2, 3]} spacing={[4, null, 6]} py='4'>
            {
                cards.map(card => (
                    <Box key={card.title} >
                        <Heading as="h5" >
                            {card.title}
                        </Heading>
                        <Text>
                            {card.body}
                        </Text>
                        <Button as="a">
                            Read more
                        </Button>
                    </Box>
                ))
            }
        </SimpleGrid>
    )
}

export default CardList