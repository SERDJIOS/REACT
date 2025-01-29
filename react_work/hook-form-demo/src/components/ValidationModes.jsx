import { useForm } from 'react-hook-form';

export function ValidationModesHTML5() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Валидации</h2>

      <label htmlFor='phone'>Phone:</label>
      <input
        id="phone"
        placeholder='Enter your phone number'
        {...register('phone', {
          required: 'Phone is necessary',
          pattern: {
            value: /^\+?[0-9]{10,12}$/,
            message: 'Wrong phone number'
          }
        })}
      />
      <button>Submit</button>
      {errors.phone && <p>{errors.phone.message}</p>}
    </form>
  )
}

export function ValidationModesCustom() {
  return (
    <form>
      <input
        type="number"
        {...register('age', {
          required
        })}
      />
  )
}

export function ValidationModesCustom() {
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onBlur' });

  const validateAge = value => {
    if (value < 18) {
      return 'Age should be 18+'
    }
    return true;
  }

  const onSubmit = data => alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder='Enter your age'
        type="number"
        {...register('age', {
          required: 'Enter your age',
          validate: validateAge
        })}
      />
      <button>Submit</button>
      {errors.age && <p>{errors.age.message}</p>}
    </form>
  )
}

export function ValidationModesCustomAsync() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const checkUsernameAvailability = async (username) => {
    const res = await fetch(`/api/username-check/${username}`)
    const { isAvailable } = await res.json()
    return isAvailable ? true : "Username is already in use"
  }

  const onSubmit = data => alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder='Enter your name'
        type="text"
        {...register('name', {
          required: 'Enter your name',
          validate: checkUsernameAvailability
        })}
      />
      <button>Submit</button>
      {errors.age && <p>{errors.age.message}</p>}
    </form>
  );
}