import { useState } from 'react';
import { MenuItem } from './MenuItem';

interface MenuProps {
  menuItems: MenuItem[];
}

export const Menu = ({ menuItems }: MenuProps) => {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    menuItems?.length && (
      <nav>
        {!selected && (
          <ul className='flex flex-col gap-3 w-full max-w-full'>
            {menuItems.map((item, i) => (
              <MenuItem
                key={i}
                {...item}
                onClick={() => setSelected(item.label)}
              />
            ))}
          </ul>
        )}
        {selected && (
          <div className='flex flex-col gap-3 w-full max-w-full'>
            <ul>
              <MenuItem
                id='back'
                key='back'
                label='Back'
                icon='arrow-left'
                onClick={() => setSelected(null)}
              />
              {menuItems
                .find((item) => item.label === selected)
                ?.subItems?.map((subItem, i) => (
                  <MenuItem key={i} {...subItem} />
                ))}
            </ul>
          </div>
        )}
      </nav>
    )
  );
};
