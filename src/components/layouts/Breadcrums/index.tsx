import React, { FC } from 'react';
import Link from 'next/link';
import { clsx } from 'clsx';

interface BreadcrumbsProps {
  label: string;
  href: string;
  active?: boolean;
}

const Breadcrumbs = ({ breadcrumbs }: { breadcrumbs: BreadcrumbsProps[] }) => {
  return (
    <ol className="flex w-full items-center">
      {breadcrumbs.map((breadcrumb, index) => (
        <li
          key={breadcrumb.href}
          className={clsx(
            'flex',
            breadcrumb.active ? 'text-gray-900' : 'text-gray-500'
          )}>
          <Link href={breadcrumb.href}>
            <h1 className="text-2xl">{breadcrumb.label}</h1>
          </Link>

          {index < breadcrumbs.length - 1 ? (
            <span className="mx-3 inline-block text-2xl">/</span>
          ) : null}
        </li>
      ))}
    </ol>
  );
};

export default Breadcrumbs;
