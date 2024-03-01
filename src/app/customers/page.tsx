import React, { FC } from 'react';
import Search from '@/components/layouts/Search';
import { Button } from '@/components/ui/button';
import { GrUserAdd } from 'react-icons/gr';
import TableCustomers from '@/components/layouts/TableCustomers';
import Link from 'next/link';

interface CustomersProps {}

const Customers: FC<CustomersProps> = () => {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl">Customers</h1>
      </div>

      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search customer..." />
        <Button asChild>
          <Link href="/customers/create">
            <GrUserAdd size={20} className="mr-2" />
            Create Customer
          </Link>
        </Button>
      </div>

      <TableCustomers query="" />
    </div>
  );
};

export default Customers;
