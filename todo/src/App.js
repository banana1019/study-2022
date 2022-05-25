import {useState} from 'react';
import './App.css';
import TodoBoard from './components/TodoBoard';

// 1. 인풋창이 있고 버튼이 있다.
// 2. 인풋창에 값을 입력하고 버튼을 클릭하면 아이템이 추가가 된다.
//   - 인풋창에 입력한 값을 가져와야 한다.
//     - input창에 값을 입력할 때마다 호출되는 onChange 이벤트
//     - event.target.value
//   - 버튼을 클릭하면! 호출할 함수 만들기
// 3. 아이템 삭제 버튼을 누르면 삭제가 가능하다.
function App() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);
  const addItem = () => {
    console.log("I'm here!", inputValue);
    setTodoList([...todoList, inputValue]);
  }
  return (
    <main>
      <input value={inputValue} type="text" onChange={(event) => setInputValue(event.target.value)}></input>
      <button onClick={addItem}>추가</button>

      <TodoBoard todoList={todoList} />
    </main>
  );
}

export default App;
