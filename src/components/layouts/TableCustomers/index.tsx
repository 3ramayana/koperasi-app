'use client';

import React, { FC } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { GrEdit, GrView } from 'react-icons/gr';
import { fetcher } from '@/lib/utils';
import { tblCustomers, tblSchool } from '@prisma/client';
import useSWR from 'swr';

interface TableCustomersProps {
  query: string;
}

const TableCustomers: FC<TableCustomersProps> = ({ query }) => {
  // fetch data customers
  const { data, error, isLoading } = useSWR<tblCustomers[]>(
    '/api/customers',
    fetcher
  );
  console.log(data);

  return (
    <div className="mt-10">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Customer</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Place of Duty</TableHead>
            <TableHead>Balance</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((item: any) => (
            <TableRow key={item.customer_id}>
              <TableCell>{item.firstname + ' ' + item.lastname}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.tblSchool.school_name}</TableCell>
              <TableCell>{item.balance}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-3">
                  <Button variant={'outline'}>
                    <GrView />
                  </Button>
                  <Button variant={'outline'}>
                    <GrEdit />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TableCustomers;
