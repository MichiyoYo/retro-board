import ActionButtons from './ActionButtons';

export default function LoginForm() {
  return (
    <div className='nes-container with-title is-centered'>
      <div className='card-body items-center text-center'>
        <p className='title'>Login</p>
        <p>We are using cookies for no reason.</p>
        <ActionButtons />
      </div>
    </div>
  );
}
