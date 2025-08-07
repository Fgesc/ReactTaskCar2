import { useState } from 'react';
import './CarsColorList.css';



function CarsColorList({ color, carIndex}) {
  const [selectedColor, setSelectedColor] = useState('');

  const handleChange = event => {
    setSelectedColor(event.target.value);
  };


  return (
    <select className='selectColor' id={carIndex} value={selectedColor} onChange={handleChange}>
      <option disabled value="">Выбрать цвет</option>
      {color.map((item, idx) => (
        <option key={`color-${idx}`} value={item}>{item}</option>
      ))}
    </select>
  );
}

export default CarsColorList;