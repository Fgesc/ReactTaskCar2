import './Button.css';

type IsReservedType = {
  isReserved: boolean;
};

export default function Button({isReserved} : IsReservedType){
    const reserve = isReserved ? "Зарезервирован":"Забронировать";
    return <button className="button" disabled={isReserved}>{reserve}</button>
}