import BoardList from './boards/BoardList';

const Dashboard = async () => {
  const res = await fetch(
    'https://664146aca7500fcf1a9ffe56.mockapi.io/api/v1/boards'
  );
  const boards = await res.json();

  return (
    <>
      <h2>Dashboard</h2>
      <h3>Boards</h3>
      <BoardList boards={boards} />
    </>
  );
};

export default Dashboard;
