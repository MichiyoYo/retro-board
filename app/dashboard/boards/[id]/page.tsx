import { notFound } from 'next/navigation';
import React from 'react';

interface BoardDetailsProps {
  params: { id: string };
}

const BoardDetails = ({ params: { id } }: BoardDetailsProps) => {
  if (id === 'meh') return notFound();
  return <div>BoardDetails {id}</div>;
};

export default BoardDetails;
