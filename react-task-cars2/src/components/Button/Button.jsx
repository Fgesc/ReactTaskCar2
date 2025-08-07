import './Button.css';

export default function Button({isReserved}) {
    const reserve = isReserved ? "Зарезервирован":"Забронировать";
    return <button className="button" disabled={isReserved}>{reserve}</button>
}