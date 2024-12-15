'use client';
import Header from '@/app/components/header';
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
    <>
      <Header>Companies ({params.id})</Header>
    </>
  );
};

export default Companies;
