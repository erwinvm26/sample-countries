'use client';
import { Dispatch, SetStateAction } from 'react';

import { Input } from '@chakra-ui/react';

interface SearchProps {
  bind: Dispatch<SetStateAction<string>>;
}

export default function Search({ bind }: SearchProps) {
  return (
    <Input
      placeholder="Search"
      border="none"
      _focusVisible={{
        borderColor: 'transparent',
        boxShadow: '0 0 0 1px transparent'
      }}
      onChange={(e) => bind(e.target.value)}
    />
  );
}
