import { useForm, useWatch } from 'react-hook-form';

// watch - достается из useForm, работает "неэффективно". Перерендер независимо от изменяемого поля

// useWatch - импортируется из библиотеки, поэтому изначально ничего не знает
// о нашей форме. Передаем ему эту информацию посредством control. Перерендер только от подписчика

export default function WatchForm() {
  const { register, watch, control } = useForm()
  // const selectedOption = watch("selectOption")
  const selectedOption = useWatch({ control, name: 'selectOption' })

  return (
    <form>
      <select {...register("selectOption")}>
        <option value="option1">Option1</option>
        <option value="option2">Option2</option>
      </select>

      {selectedOption === 'option2' && <input type="text" {...register("additionalInfo")}/>}
    </form>
  )
}