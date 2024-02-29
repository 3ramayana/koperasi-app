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
import { GrEdit } from 'react-icons/gr';

interface TableCustomersProps {
  query: string;
}

const TableCustomers: FC<TableCustomersProps> = ({ query }) => {
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
          <TableRow>
            <TableCell>Taufiq Ismail</TableCell>
            <TableCell>ismailtaufiq19@gmail.com</TableCell>
            <TableCell>SMAS AVEROS</TableCell>
            <TableCell>$250.00</TableCell>
            <TableCell className="text-right">
              <div className="flex justify-end gap-3">
                <Button variant={'outline'}>
                  <GrEdit />
                </Button>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default TableCustomers;
