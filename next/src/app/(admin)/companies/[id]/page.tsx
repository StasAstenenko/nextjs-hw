'use client';

import { notFound } from 'next/navigation';
import { useEffect } from 'react';

export interface CompaniesProps {
  params: { id: string };
}

const Companies = ({ params }: CompaniesProps) => {
  useEffect(() => {
    const id = Number.parseInt(params.id);
    if (Number.isNaN(id)) {
      notFound();
    }
  }, [params.id]);
  return (
    <div className="py-6 px-10">
      <p>{`Information about company (${params.id})`}</p>
    </div>
  );
};

export default Companies;
