import { Button } from '@/components/ui/button';
import React, { FC } from 'react';
import {
  GrHomeRounded,
  GrUser,
  GrDocumentStore,
  GrMoney,
  GrUserSettings,
  GrLogout,
} from 'react-icons/gr';

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = () => {
  return (
    <div className="pb-12 min-h-screen">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Dashboard</h2>
          <div className="space-y-3">
            <Button
              variant={'ghost'}
              className="w-full justify-start rounded-none hover:text-primary">
              <GrHomeRounded className="mr-2" />
              Home
            </Button>
            <Button
              variant={'ghost'}
              className="w-full justify-start rounded-none hover:text-primary">
              <GrUser className="mr-2" />
              Nasabah
            </Button>
            <Button
              variant={'ghost'}
              className="w-full justify-start rounded-none hover:text-primary">
              <GrDocumentStore className="mr-2" />
              Tabungan
            </Button>
            <Button
              variant={'ghost'}
              className="w-full justify-start rounded-none hover:text-primary">
              <GrMoney className="mr-2" />
              Pinjaman
            </Button>
          </div>
        </div>
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold">Settings</h2>
            <div className="space-y-3">
              <Button
                variant={'ghost'}
                className="w-full justify-start rounded-none hover:text-primary">
                <GrUserSettings className="mr-2" />
                Setting
              </Button>
              <Button
                variant={'ghost'}
                className="w-full justify-start rounded-none text-red-500 hover:text-red-500 hover:bg-red-100">
                <GrLogout className="mr-2" />
                Log Out
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
