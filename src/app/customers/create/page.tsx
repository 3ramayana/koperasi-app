import Breadcrumbs from '@/components/layouts/Breadcrums';
import CreateForm from '@/components/layouts/CreateForm';
import React, { FC } from 'react';

interface CreateCustomersProps {}

const CreateCustomers: FC<CreateCustomersProps> = () => {
  return (
    <div className="w-full">
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Customers', href: '/customers' },
          {
            label: 'Create Customer',
            href: '/customers/create',
            active: true,
          },
        ]}
      />

      <CreateForm />
    </div>
  );
};

export default CreateCustomers;
