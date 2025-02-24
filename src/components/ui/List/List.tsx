import { Item } from 'types';

interface ListProps {
  items: Item[] | Map<string, Item>;
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
      {Array.isArray(items)
        ? items.map((item, i) => (
            <ItemComponent key={i} {...{ [resourceName]: item }} />
          ))
        : Array.from(items.entries()).map(([key, item]) => (
            <ItemComponent key={key} {...{ [resourceName]: item }} />
          ))}
    </ul>
  );
};
