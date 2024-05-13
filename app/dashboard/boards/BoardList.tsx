import { Board } from '@/app/types/users';
import Image from 'next/image';

interface BoardListProps {
  boards: Board[];
}

const BoardList = ({ boards }: BoardListProps) => {
  return (
    <ul className='flex flex-row flex-wrap gap-4'>
      {boards?.map((board) => (
        <li key={board.id}>
          <div className='card w-96  bg-slate-400 shadow-xl '>
            <Image
              src={`${board.image}`}
              width={640}
              height={480}
              alt='Picture of the author'
            />
            <div className='card-body'>
              <h2 className='card-title'>{board.title}</h2>
              <caption>{board.author.username || 'Anonymous'}</caption>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BoardList;
