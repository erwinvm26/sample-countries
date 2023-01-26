'use client';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Questrial } from '@next/font/google';

const questrial = Questrial({
  style: ['normal'],
  weight: ['400']
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={questrial.className}>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
