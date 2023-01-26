'use client';
import { useState } from 'react';
import {
  Checkbox,
  Stack,
  Switch,
  FormControl,
  FormLabel
} from '@chakra-ui/react';

import { Countries, CountriesTypes } from './countries';

interface ListCheckProps {
  searchInput: string;
}

export default function ListCheck({ searchInput }: ListCheckProps) {
  const [checkedItems, setCheckedItems] = useState(Countries);
  const [isCheckedGlobal, setIsCheckedGlobal] = useState<boolean>(false);

  const handleNextList = (
    listIdx: number,
    nextChecked: boolean,
    { name, code }: CountriesTypes
  ) => {
    const nextCheckList = [...checkedItems];
    nextCheckList.splice(listIdx, 1, {
      name,
      code,
      isChecked: nextChecked
    });

    const allChecked = nextCheckList.every((item) => item.isChecked);

    setCheckedItems(nextCheckList);
    setIsCheckedGlobal(allChecked);
  };

  const handleAllChecked = (checked: boolean) => {
    const nextCheckList = checkedItems.map((item) => ({
      ...item,
      isChecked: checked
    }));

    const allChecked = nextCheckList.every((item) => item.isChecked);

    setCheckedItems(nextCheckList);
    setIsCheckedGlobal(allChecked);
  };

  return (
    <>
      <FormControl display="flex" alignItems="center" padding="20px 0px">
        <Switch
          id="email-alerts"
          isChecked={isCheckedGlobal}
          onChange={(e) => handleAllChecked(e.target.checked)}
        />
        <FormLabel htmlFor="email-alerts" pl="4" mb="0" fontWeight="600">
          Show selected only
        </FormLabel>
      </FormControl>

      <Stack mt={1} spacing={1}>
        {checkedItems
          .filter((item) =>
            Object.values(item)
              .join('')
              .toLowerCase()
              .includes(searchInput.toLowerCase())
          )
          .map(({ name, code, isChecked }, indx) => {
            return (
              <Checkbox
                key={code}
                isChecked={isChecked}
                size="lg"
                __css={{}}
                onChange={(e) =>
                  handleNextList(indx, e.target.checked, { name, code })
                }
              >
                {name}
              </Checkbox>
            );
          })}
      </Stack>
    </>
  );
}
