import React, { FC } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { GrNotification } from 'react-icons/gr';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <div className="pb-3 mb-8 border-b border-border flex flex-row items-center justify-end gap-4">
      <div className="relative">
        <GrNotification size={24} />
        <span className="absolute top-0 right-0 flex h-2 w-2 rounded-full bg-blue-600"></span>
      </div>
      <div>
        <p className="font-semibold">
          Hi, <span>Taufiq</span>
        </p>
      </div>
      <div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Header;
