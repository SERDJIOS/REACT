import { useForm } from 'react-hook-form'
import styles from './DynamicForm.module.css'

export default function DynamicForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const firstFieldValue = watch('firstField')

  function onSubmit(data) {
    console.log('Форма отправлена:', data)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor='firstField'>First Field</label>
      <input
        id='firstField'
        type='text'
        {...register('firstField', { required: true, minLength: 5 })}
      />
      {errors.firstField && <p>Минимум 5 символа</p>}

      {firstFieldValue?.length >= 5 && (
        <>
          <label htmlFor='secondField'>Second Field</label>
          <input
            id='secondField'
            type='text'
            {...register('secondField', { required: true })}
          />
        </>
      )}

      <button type='submit'>Submit</button>
    </form>
  )
}