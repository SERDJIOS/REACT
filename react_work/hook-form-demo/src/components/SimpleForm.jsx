import { useForm } from 'react-hook-form';

export default function SimpleForm() {
  const { register, formState: { isDirty, isValid } } = useForm({
    defaultValues: {
      name: 'John',
      surname: 'Doe'
    }
  });

  return (
    <form>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        placeholder="Enter your name"
        {...register('name', { required: true })}
      />
      <label htmlFor="surname">Surname:</label>
      <input
        id="surname"
        placeholder="Enter your surname"
        {...register('surname', { required: true })}
      />

      <div>
        {isDirty && <p>Form has changed</p>}
        {isValid ? <p>All good</p> : <p>Form is not valid</p>}
      </div>
    </form>
  )
}