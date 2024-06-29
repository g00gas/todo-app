import {Code, Flex, Text} from "@chakra-ui/react";

const AboutPage = () => {
    return(
        <Flex alignItems="center" justifyContent="center" flexDirection="column" gap="1rem">
            <Text fontSize="xl" fontWeight="bold">Aplikacja Todo</Text>
            <Text fontSize="l" fontWeight="bold">Autor: Michał Gugała</Text>
            <Text fontSize="l" fontWeight="bold">Stack technologiczny (frontend): React + TypeScript + Vite</Text>
            <Text fontSize="l" fontWeight="bold">Stack technologiczny (backend): Go + gorm + gin</Text>
            <Text fontSize="l" fontWeight="bold">Stack technologiczny (infrastruktura): PostgreSQL + Docker</Text>
            <Text fontSize="l" fontWeight="bold">RESTful API ścieżki:</Text>
            <Code>
                POST   /api/todo
            </Code>
            <Code>
                GET    /api/todo/:id
            </Code>
            <Code>
                GET    /api/todo
            </Code>
            <Code>
                DELETE /api/todo/:id
            </Code>
            <Code>
                PATCH  /api/todo/:id
            </Code>
        </Flex>
    )
}

export default AboutPage