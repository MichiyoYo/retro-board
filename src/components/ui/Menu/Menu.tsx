import { MenuItem } from './MenuItem';

interface MenuProps {
  menuItems: MenuItem[];
}

export const Menu = ({ menuItems }: MenuProps) => {
  return (
    menuItems?.length && (
      <nav>
        <ul className='flex flex-col gap-3 w-full max-w-full'>
          {menuItems.map((item, i) => (
            <MenuItem key={i} {...item} />
          ))}
        </ul>
      </nav>
    )
  );
};
