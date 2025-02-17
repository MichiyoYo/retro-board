interface IconProps {
  name: string;
  size: number;
}

export const Icon = ({ name, size }: IconProps) => {
  const iconPath = `/src/assets/icons/${name}.svg`;
  return <img src={iconPath} height={size} width={size} />;
};
