import { useForm } from 'react-hook-form';

const BasicForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => alert(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>1. Базовая форма с register и handleSubmit</h2>

      <input
        {...register('username', { required: 'Обязательное поле' })}
        placeholder="Имя пользователя"
      />
      {errors.username && <p>{errors.username.message}</p>}

      <button type="submit">Отправить</button>
    </form>
  );
};

export default BasicForm;