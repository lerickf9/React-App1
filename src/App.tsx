import Card, { CardBody } from './Components/Card';
import List from './Components/List';
import Button from './Components/Button';
import { useState } from 'react';

function App(){
  const [data, setData] = useState(['Goku', 'Tanjiro', 'chanchito feliz']);
  // const [isLoading, setIsLoading] = useState(false);
  // const handleClick = () => setIsLoading(!isLoading);

  // const list: string[] = ['Goku', 'Tanjiro', 'chanchito feliz']
  // const handleSelect = (elemento: string) =>{
  //   console.log('imprimiendo: ', elemento);
  // }

  // return <Card>
    
  //   <CardBody title='Hola mundo' text='Este es el texto' />
  //   {list.length !== 0 ?(
  //     <List data={list} onSelect={handleSelect} />
  //   ): (
  //     "No hay contenido"
  //   )}
  //   <Button isLoading={isLoading} onClick={handleClick}>
  //     Hola mundo  
  //   </Button>  

  //   </Card>;
  const addMinions = () =>{
    setData([...data, 'Minion'])
  }
  const delMinions = () =>{
    setData(data.slice(0, -1));
  }
  return (
    <Card>
      <Button isLoading={true} onClick={addMinions}>Agregar</Button>
      <Button isLoading={false} onClick={delMinions}>Eliminar</Button>
      <List data={data}/>
  </Card>
  )
}

export default App;