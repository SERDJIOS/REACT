import CityCard from "./CityCard";
import CitySelector from "./CitySelector";
import { useState } from "react";
import './index.css'
import MathQuiz from "./MathQuiz";

const citiesData = [
  {
    name: "Токио",
    description: "Столица Японии, известная своими неоновыми огнями, многолюдностью и современной архитектурой.",
    imageUrl: "https://www.topmagazine.cz/wp-content/uploads/2021/06/tokio-1024x576.jpg",
    facts: [
      "Токио - самый населенный мегаполис в мире.",
      "Здесь расположена самая высокая башня в Японии - Токийская башня.",
      "В Токио проходят множество культурных событий и фестивалей."
    ]
  },
  {
    name: "Киото",
    description: "Город на острове Хонсю, известный своими многочисленными классическими буддийскими храмами, а также садами, императорскими дворцами, синтоистскими святилищами и традиционными деревянными домами.",
    imageUrl: "https://previews.123rf.com/images/patrykkosmider/patrykkosmider1703/patrykkosmider170300309/74966095-pagoda-of-the-kiyomizu-dera-buddhist-temple-in-kyoto-japan.jpg",
    facts: [
      "В Киото насчитывается более 1600 буддийских храмов.",
      "Этот город был столицей Японии более тысячи лет."
    ]
  },
  {
    name: "Осака",
    description: "Город в центральной части острова Хонсю, известен своими современными достопримечательностями и активной ночной жизнью.",
    imageUrl: "https://previews.123rf.com/images/elec/elec1708/elec170801045/84959109-%D0%BD%D0%BE%D1%87%D0%BD%D0%BE%D0%B9-%D0%B2%D0%B8%D0%B4-%D0%BD%D0%B0-%D0%B7%D0%B0%D0%BC%D0%BE%D0%BA-%D0%BE%D1%81%D0%B0%D0%BA%D0%B8-%D0%B2-%D0%BE%D1%81%D0%B0%D0%BA%D0%B5-%D1%8F%D0%BF%D0%BE%D0%BD%D0%B8%D1%8F.jpg",
    facts: [
      "Осака известна своим замком, который играл ключевую роль в объединении Японии в XVI веке.",
      "Город является кулинарной столицей Японии."
    ]
  },
  {
    name: "Хоккайдо",

    description: "Самый северный остров Японии, известный своей природой, снежными фестивалями и уникальной культурой.",

    imageUrl: "http://i1.wallbox.ru/wallpapers/main2/202201/nebo-ozero-gory-aponia-hokkajdo-asahi.jpg",

    facts: [

      "Хоккайдо предлагает отличные условия для зимних видов спорта, особенно для лыжного спорта и сноубординга.",

      "Летом остров привлекает туристов своими цветущими лавандовыми полями."

    ]

  },

  {

    name: "Нагоя",

    description: "Город в центре Хонсю, известен своим отраслевым влиянием и историческими достопримечательностями.",

    imageUrl: "https://www.jalan.net/jalan/images/pict3L/Y1/Y329551/Y329551055.jpg",

    facts: [

      "Нагоя - один из важнейших промышленных городов Японии, центр автомобилестроения.",

      "Здесь находится известный Нагойский замок с позолоченными делфинами на крыше."

    ]

  }

];

export default function App() {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleCityChange = (cityName) => {
    const city = citiesData.find((city) => city.name === cityName);
    setSelectedCity(city);
  };

  return (
    <div>
      <div className="MathQuiz">
        <MathQuiz />
      </div>
      <div className="App1">
        <CitySelector cities={citiesData} onCityChange={handleCityChange} />
        <CityCard city={selectedCity} />
      </div>
    </div>
  );
}