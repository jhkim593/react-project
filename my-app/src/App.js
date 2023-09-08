import React, { useState } from 'react';
import Counter from './components/Counter'

function App(){
  // const [isOpen, setIsOpen] = useState(false);
  // const [counter, setCounter] = useState(0);

  // const onClickOpen = () => setIsOpen((prev)=>!prev);
  
  return (
    <div>
      {/* <button type="button" onClick={onClickOpen}>오픈 상태 변경 </button> */}
      <Counter/>
      {/* { isOpen &&<Counter counter={counter} setCounter ={setCounter}/>}; */}
    </div>
  )
}

export default App;
