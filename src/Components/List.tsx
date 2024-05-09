import { useState } from "react";

type Props = {
    data: string[];
    onSelect?: (elemento: string) => void;
}

function List({data, onSelect}: Props) {
    //state hook [index, setIndex]= index es la variable que querems ambiar y setIndex es una funcion
    //Siempre state va a espera 2 valores y por defecto en ingles. index=indice
    //y la segunda con nombre de set y la variable setIndex. (Pascal case).
    const [index, setIndex] = useState(1);
    const handleClcick = (i: number, elemento: string) => {
        setIndex(i);
        onSelect?.(elemento);
    }
  return (
    <ul className="list-group">
        {data.map((elemento, i) =>(
            <li onClick={() => handleClcick(i, elemento)} key={elemento} 
            className={`list-group-item ${index == i ? 'active' : ''}`}>
                {elemento}
            </li>
        ))}
    </ul>
  )
}

export default List