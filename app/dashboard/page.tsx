const Dashboard = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const boards = await res.json();
  return (
    <>
      <h2>Dashboard</h2>
      <h3>Boards</h3>
      <ul>
        {boards.map((board) => (
          <li>{board.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Dashboard;
