'use client';
import React, { useState } from 'react';
import { Inter } from '@next/font/google';
import {
  Container,
  Center,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Box,
  Button,
  Text,
  Flex,
  Spacer
} from '@chakra-ui/react';
import Search from '@/components/search';
import ListCheck from '@/components/listCheck';

const inter = Inter({
  weight: ['500'],
  style: ['normal']
});

export default function Home() {
  const [search, setSearch] = useState<string>('');

  return (
    <Container>
      <Center height="100vh" justifyContent="center">
        <Box>
          <Text
            className={inter.className}
            marginBottom="35px"
            fontSize="24px"
            textAlign="center"
          >
            Countries
          </Text>
          <Card
            maxWidth="494px"
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
            <CardFooter padding="10px 20px">
              <hr />

              <Box width="100%" display="flex" justifyContent="space-between">
                <Button
                  as={'a'}
                  variant="link"
                  href="https://www.figma.com/file/rVk2ElEs001Gv1v6d3VmSg/Sample-task?t=EL4hlW4PKn3PcWUc-0"
                  target="_blank"
                  overflow="auto"
                  whiteSpace="pre-wrap"
                >
                  Figma Design Here
                </Button>
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
              </Box>
            </CardFooter>
          </Card>
        </Box>
      </Center>
    </Container>
  );
}
