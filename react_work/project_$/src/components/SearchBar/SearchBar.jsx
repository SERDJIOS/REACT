import DisneyLogo from '../../assets/Disney.svg';
import FacebookLogo from '../../assets/Facebook.svg';
import MicrosoftLogo from '../../assets/Microsoft.svg';
import SonyLogo from '../../assets/Sony.svg';
import ColaLogo from '../../assets/Cola.svg';

export default function SearchBar() {
  return (
    <section >
      <h1>Один клик<br /> и работа в кармане</h1>
      <form>
        <input placeholder='Должность или компания' />
        <input placeholder='Город, Страна' />
        <button>Поиск</button>
      </form>
      <div>
        <p>Помогаем найти работу:</p>
        <ul>
          <li>
            <img alt='Disney' src={DisneyLogo} />
          </li>
          <li>
            <img alt='Facebook' src={FacebookLogo} />
          </li>
          <li>
            <img alt='Microsoft' src={MicrosoftLogo} />
          </li>
          <li>
            <img alt='Sony' src={SonyLogo} />
          </li>
          <li>
            <img alt='Cola-Cola' src={ColaLogo} />
          </li>
        </ul>
      </div>
    </section>
  )
}