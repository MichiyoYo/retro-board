type MainProps = {
  children: React.ReactNode;
};
export const Main = ({ children }: MainProps) => (
  <main className='flex flex-col flex-1 max-w-screen'>{children}</main>
);
