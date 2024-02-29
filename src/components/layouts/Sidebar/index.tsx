'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
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
  const router = useRouter();

  return (
    <div className="pb-12 min-h-screen">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Dashboard</h2>
          <div className="space-y-3">
            <Button
              variant={'ghost'}
              className="w-full justify-start rounded-none hover:text-primary"
              onClick={() => router.push('/')}>
              <GrHomeRounded className="mr-2" />
              Home
            </Button>
            <Button
              variant={'ghost'}
              className="w-full justify-start rounded-none hover:text-primary"
              onClick={() => router.push('/customers')}>
              <GrUser className="mr-2" />
              Customers
            </Button>
            <Button
              variant={'ghost'}
              className="w-full justify-start rounded-none hover:text-primary"
              onClick={() => router.push('/savings')}>
              <GrDocumentStore className="mr-2" />
              Savings
            </Button>
            <Button
              variant={'ghost'}
              className="w-full justify-start rounded-none hover:text-primary"
              onClick={() => router.push('/loan')}>
              <GrMoney className="mr-2" />
              Loan
            </Button>
          </div>
        </div>
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold">Settings</h2>
            <div className="space-y-3">
              <Button
                variant={'ghost'}
                className="w-full justify-start rounded-none hover:text-primary"
                onClick={() => router.push('/settings')}>
                <GrUserSettings className="mr-2" />
                Settings
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
