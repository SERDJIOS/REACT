import { useForm, useWatch } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

export default function EmailForm() {
  const { register, control } = useForm();
  const [email, name] = useWatch({ control, name: ['email', 'name'] })

  return (
    <form>
      <h2>Email Form</h2>
      <label htmlFor='email'></label>
      <input
        id="email"
        type="email"
        placeholder="Enter your email"
        {...register('email')}
      />
      <input
        id="name"
        type="text"
        placeholder="Enter your name"
        {...register('name')}
      />
      <p>{email}</p>
      <p>{name}</p>

      <DevTool control={control} />

    </form>
  );
}