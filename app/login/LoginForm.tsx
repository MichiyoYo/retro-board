export default function LoginForm() {
  return (
    <div className='card w-96 bg-slate-800 text-neutral-content'>
      <div className='card-body items-center text-center'>
        <h2 className='card-title'>Login</h2>
        <p>We are using cookies for no reason.</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Accept</button>
          <button className='btn btn-ghost'>Deny</button>
        </div>
      </div>
    </div>
  );
}
