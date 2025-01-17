# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

<!--  -->
Задание 2 *

Компонент "Список приглашенных"

Создайте новый компонент List.jsx.

Внутри него импортируйте useState из React.

Внутри компонента List используйте useState для создания состояния people, начальное значение которого будет массивом объектов людей с их именами и возрастами.

Верните JSX в компоненте List, который будет содержать:

Список для отображения людей.

Каждый элемент списка будет содержать имя и возраст человека.

Для каждого элемента в списке предусмотрите кнопку удаления.

Добавьте обработчик события для кнопки удаления студента, который будет обновлять состояние people, удаляя соответствующего человека из списка.

Внутри компонента List определите возвращаемый JSX так, чтобы список с информацией о людях и кнопками удаления располагался внутри контейнера <div>.

Создайте файл App.js.

В файле App.js импортируйте компонент List из файла List.jsx.

В компоненте App используйте компонент List.

Стилизуйте приложение на ваше усмотрение

Запустите ваше React-приложение и убедитесь, что компонент List отображается и позволяет пользователю удалять студентов из списка.


Данные для выполнения заданий:


const [people, setPeople] = useState([

    { id: 1, name: 'Иван', age: 20 },

    { id: 2, name: 'Мария', age: 22 },

    { id: 3, name: 'Алексей', age: 21 },

    { id: 4, name: 'Марина', age: 19 },

    { id: 5, name: 'Даша', age: 23 },

    { id: 6, name: 'Глеб', age: 24 },

    { id: 7, name: 'Дима', age: 18 },

    { id: 8, name: 'Гриша', age: 20 },

    { id: 9, name: 'Серафим', age: 21 }

  ]);


<!--  -->

