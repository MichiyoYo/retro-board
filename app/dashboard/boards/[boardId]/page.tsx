import { notFound } from 'next/navigation';
import React from 'react';

interface BoardDetailsProps {
  params: { boardId: string };
}

const BoardDetails = ({ params: { boardId } }: BoardDetailsProps) => {
  if (boardId === 'meh') return notFound();
  return <div>BoardDetails {boardId}</div>;
};

export default BoardDetails;
