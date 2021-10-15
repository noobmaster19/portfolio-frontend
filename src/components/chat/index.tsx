import { h } from 'preact'
import { IconButton, Box, Text, useDisclosure, Collapse } from "@chakra-ui/react"
import {
    ChatIcon
} from '@chakra-ui/icons';

export default function ChatWidget() {
    const { isOpen, onToggle } = useDisclosure();

    return (

        <Box>
            <Text>Hello</Text>
            <IconButton
                variant="outline"
                colorScheme="teal"
                aria-label="Chat icon"
                fontSize="20px"
                onClick={onToggle}
                icon={<ChatIcon />}
            />
            <Collapse in={isOpen} animateOpacity>
                <Box>HELLO</Box>
            </Collapse>
        </Box>
    );
}