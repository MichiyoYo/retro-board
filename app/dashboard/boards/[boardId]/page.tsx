import React from 'react';

interface BoardDetailsProps {
  params: { boardId: string };
}

const BoardDetails = ({ params: { boardId } }: BoardDetailsProps) => {
  return <div>BoardDetails {boardId}</div>;
};

export default BoardDetails;
