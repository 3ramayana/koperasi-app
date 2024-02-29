import React, { FC } from 'react';
import { GrSearch } from 'react-icons/gr';
import { Input } from '@/components/ui/input';

interface SearchProps {
  placeholder: string;
}

const Search: FC<SearchProps> = ({ placeholder }) => {
  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <Input
        placeholder={placeholder}
        className="peer py-[9px] pl-10 text-sm"
      />
      <GrSearch className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-primary" />
    </div>
  );
};

export default Search;
