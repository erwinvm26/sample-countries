'use client';
import { useState } from 'react';
import {
  Container,
  Center,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Box,
  Button,
  Text
} from '@chakra-ui/react';
import Search from '@/components/search';
import ListCheck from '@/components/listCheck';

export default function Home() {
  const [search, setSearch] = useState<string>('');

  return (
    <Container>
      <Center height="100vh" justifyContent="center">
        <Box>
          <Card
            width="494px"
            height="446px"
            border="1px solid #E1E3E6"
            boxShadow="9px 32px 35px rgba(0, 0, 0, 0.0464653)"
            borderRadius="14px"
          >
            <CardHeader paddingBottom="5px">
              <Search bind={setSearch} />
            </CardHeader>
            <CardBody padding="0 20px" height="315px">
              <Box
                padding="10px"
                borderTop="1px solid rgba(0, 0, 0, 0.0464653)"
                borderBottom="1px solid rgba(0, 0, 0, 0.0464653)"
                height="315px"
                overflowY="auto"
                css={{
                  '&::-webkit-scrollbar': {
                    width: '4px'
                  },
                  '&::-webkit-scrollbar-track': {
                    width: '6px'
                  },
                  '&::-webkit-scrollbar-thumb': {
                    background: 'gray',
                    borderRadius: '24px'
                  }
                }}
              >
                <ListCheck searchInput={search} />
              </Box>
            </CardBody>
            <CardFooter justifyContent="end" padding="10px 20px">
              <hr />
              <Button
                type="submit"
                colorScheme="green"
                width="87px"
                height="38px"
                borderRadius="50px"
                fontSize="16px"
                fontWeight="400"
                lineHeight="22px"
              >
                Save
              </Button>
            </CardFooter>
          </Card>
        </Box>
      </Center>
    </Container>
  );
}
