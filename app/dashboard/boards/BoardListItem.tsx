import { Board } from '@/app/types/users';
import Image from 'next/image';
import React, { Suspense } from 'react';
import SkeletonBoardListItem from './SkeletonBoardListItem';

interface BoardListItemProps {
  board: Board;
  key: string;
}

const BoardListItem = ({ board, key }: BoardListItemProps) => {
  return (
    <li key={key}>
      <Suspense fallback={<SkeletonBoardListItem />}>
        <div className=' bg-slate-400 shadow-xl card min-w-fit overflow-hidden'>
          <Image
            src={`${board.image}`}
            width={250}
            height={150}
            alt='Picture of the author'
          />
          <div className='card-body'>
            <h2 className='card-title'>{board.title}</h2>
            <p>{board.author.username || 'Anonymous'}</p>
          </div>
        </div>
      </Suspense>
    </li>
  );
};

export default BoardListItem;
