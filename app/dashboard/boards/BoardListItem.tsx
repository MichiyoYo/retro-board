import { Board } from '@/app/types/users';
import Image from 'next/image';
import React, { Suspense } from 'react';
import SkeletonBoardListItem from './SkeletonBoardListItem';

interface BoardListItemProps {
  board: Board;
}

const BoardListItem = ({ board }: BoardListItemProps) => {
  return (
    <Suspense fallback={<SkeletonBoardListItem />}>
      <li className='card min-w-fit  bg-slate-400 shadow-xl '>
        <Image
          src={`${board.image}`}
          width={200}
          height={150}
          alt='Picture of the author'
        />
        <div className='card-body'>
          <h2 className='card-title'>{board.title}</h2>
          <caption>{board.author.username || 'Anonymous'}</caption>
        </div>
      </li>
    </Suspense>
  );
};

export default BoardListItem;
