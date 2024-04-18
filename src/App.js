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
          <button className="py-1 px-4 bg-slate-200 rounded-lg shadow-[0_2px_15px_-5px_rgba(0,0,0,0.5)] hover:shadow-lg  active:shadow-none duration-200" onClick={handleDelete}>clear</button>
          <button className="col-start-1 py-1 px-4 bg-slate-200 rounded-lg shadow-[0_2px_15px_-5px_rgba(0,0,0,0.5)] hover:shadow-lg  active:shadow-none duration-200" onClick={() => handleClick(7)}>7</button>
          <button className="py-1 px-4 bg-slate-200 rounded-lg shadow-[0_2px_15px_-5px_rgba(0,0,0,0.5)] hover:shadow-lg  active:shadow-none duration-200" onClick={() => handleClick(8)}>8</button>
          <button className="py-1 px-4 bg-slate-200 rounded-lg shadow-[0_2px_15px_-5px_rgba(0,0,0,0.5)] hover:shadow-lg  active:shadow-none duration-200" onClick={() => handleClick(9)}>9</button>
          <button className="py-1 px-4 bg-slate-200 rounded-lg shadow-[0_2px_15px_-5px_rgba(0,0,0,0.5)] hover:shadow-lg  active:shadow-none duration-200" onClick={() => handleClick("÷")}>÷</button>
          <button className="py-1 px-4 bg-slate-200 rounded-lg shadow-[0_2px_15px_-5px_rgba(0,0,0,0.5)] hover:shadow-lg  active:shadow-none duration-200" onClick={() => handleClick(4)}>4</button>
          <button className="py-1 px-4 bg-slate-200 rounded-lg shadow-[0_2px_15px_-5px_rgba(0,0,0,0.5)] hover:shadow-lg  active:shadow-none duration-200" onClick={() => handleClick(5)}>5</button>
          <button className="py-1 px-4 bg-slate-200 rounded-lg shadow-[0_2px_15px_-5px_rgba(0,0,0,0.5)] hover:shadow-lg  active:shadow-none duration-200" onClick={() => handleClick(6)}>6</button>
          <button className="py-1 px-4 bg-slate-200 rounded-lg shadow-[0_2px_15px_-5px_rgba(0,0,0,0.5)] hover:shadow-lg  active:shadow-none duration-200" onClick={() => handleClick("x")}>x</button>
          <button className="py-1 px-4 bg-slate-200 rounded-lg shadow-[0_2px_15px_-5px_rgba(0,0,0,0.5)] hover:shadow-lg  active:shadow-none duration-200" onClick={() => handleClick(1)}>1</button>
          <button className="py-1 px-4 bg-slate-200 rounded-lg shadow-[0_2px_15px_-5px_rgba(0,0,0,0.5)] hover:shadow-lg  active:shadow-none duration-200" onClick={() => handleClick(2)}>2</button>
          <button className="py-1 px-4 bg-slate-200 rounded-lg shadow-[0_2px_15px_-5px_rgba(0,0,0,0.5)] hover:shadow-lg  active:shadow-none duration-200" onClick={() => handleClick(3)}>3</button>
          <button className="py-1 px-4 bg-slate-200 rounded-lg shadow-[0_2px_15px_-5px_rgba(0,0,0,0.5)] hover:shadow-lg  active:shadow-none duration-200" onClick={() => handleClick("-")}>-</button>
          <button className="col-span-2 py-1 px-4 bg-slate-200 rounded-lg shadow-[0_2px_15px_-5px_rgba(0,0,0,0.5)] hover:shadow-lg  active:shadow-none duration-200" onClick={() => handleClick(0)}>0</button>
          <button className="py-1 px-4 bg-slate-200 rounded-lg shadow-[0_2px_15px_-5px_rgba(0,0,0,0.5)] hover:shadow-lg  active:shadow-none duration-200" onClick={() => handleResult()}>=</button>
          <button className="py-1 px-4 bg-slate-200 rounded-lg shadow-[0_2px_15px_-5px_rgba(0,0,0,0.5)] hover:shadow-lg  active:shadow-none duration-200" onClick={() => handleClick("+")}>+</button>
        </section>
      </section>
    </div>
  );
}

export default App;
