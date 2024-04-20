import Button from './components/Button';
import { useState } from 'react';
import './App.css';

function App() {
  //states 
  const [expression, setExpression] = useState([])

  const handleClick = value => {
    setExpression([...expression, value])
  }

  const handleResult = () =>{
    const result = expression
    .join("")
    .split(/(\D)/g)
    .map(value => (value.match(/\d/g) ? parseInt(value, 0) : value))
    .reduce((acc, value, index, array) => {
      switch (value) {
        case "+":
          return (acc = acc + array[index + 1]);
        case "-":
          return (acc = acc - array[index + 1]);
        case "x":
          return (acc = acc * array[index + 1]);
        case "÷":
          return (acc = acc / array[index + 1]);
        default:
          return acc;
      }
    });
    setExpression(result);
  }

  const handleDelete = () => {
    setExpression([])
  }


  return (
    <div className="App">

      <section className="bg-[#4e6fdd] p-5  rounded-xl shadow-[1px_1px_5px_5px_rgba(0,0,0,1)]">
        <div className='bg-slate-50 rounded-lg mb-3 '>
          <h3 className="py-2 px-4 cursor-default w-fit h-[60px]">{expression}</h3>
        </div>

        <section className="grid grid-cols-4 gap-3">
          <Button title='7' func={() => handleClick(7)}/>
          <Button title='8' func={() => handleClick(8)}/>
          <Button title='9' func={() => handleClick(9)}/>
          <Button title="AC" func={handleDelete} />
          <Button title='4' func={() => handleClick(4)}/>
          <Button title='5' func={() => handleClick(5)}/>
          <Button title='6' func={() => handleClick(6)}/>
          <Button title='÷' func={() => handleClick("÷")}/>
          <Button title='1' func={() => handleClick(1)}/>
          <Button title='2' func={() => handleClick(2)}/>
          <Button title='3' func={() => handleClick(3)}/>
          <Button title="x" func={() => handleClick("x")}/>
          <Button title="-" func={() => handleClick("-")}/>
          <Button title="0" func={() => handleClick(0)} />
          <Button title="+" func={() => handleClick("+")}/>
          <Button title='=' func={() => handleResult()}/>

        </section>
      </section>
    </div>
  );
}

export default App;
