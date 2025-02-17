import { Item } from 'types';

interface ListProps {
  items: Item[];
  resourceName: string;
  itemComponent: React.ElementType;
}

export const List = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}: ListProps) => {
  return (
    <ul>
      {items.map((item, i) => (
        <ItemComponent key={i} {...{ [resourceName]: item }} />
      ))}
    </ul>
  );
};
