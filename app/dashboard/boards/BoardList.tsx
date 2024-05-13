import { Board } from '@/app/types/users';
import Image from 'next/image';
import BoardListItem from './BoardListItem';

interface BoardListProps {
  boards: Board[];
}

const BoardList = ({ boards }: BoardListProps) => {
  return (
    <ul className='flex flex-row flex-wrap gap-4'>
      {boards?.map((board: Board) => (
        <BoardListItem board={board} key={board.id} />
      ))}
    </ul>
  );
};

export default BoardList;
