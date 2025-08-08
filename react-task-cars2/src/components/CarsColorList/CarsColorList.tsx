import { useState } from 'react';
import './CarsColorList.css';

type CarsColorListType = {
  color: string[];
  carIndex: number;
};

type EventTargetValue = React.ChangeEvent<HTMLSelectElement>;



function CarsColorList({ color, carIndex} : CarsColorListType) {
  const [selectedColor, setSelectedColor] = useState('');

  const handleChange = (event : EventTargetValue) => {
    setSelectedColor(event.target.value);
  };


  return (
    <select className='selectColor' id={String(carIndex)} value={selectedColor} onChange={handleChange}>
      <option disabled value="">Выбрать цвет</option>
      {color.map((item, idx) => (
        <option key={`color-${idx}`} value={item}>{item}</option>
      ))}
    </select>
  );
}

export default CarsColorList;