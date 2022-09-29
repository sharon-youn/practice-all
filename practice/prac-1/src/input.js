import { useInput } from './useInput';

function displayMessage(message) {
    alert(message)
}
function App() {
    // useInput은 전달인자로 초기값을 받음! 
    // 리턴값에 맞춰서 const [ , ] 맞춰주기 
  const [inputValue, handleChange, handleSubmit] =useInput("안녕", displayMessage)

   

    return (
        <div>
            <h1>useInput</h1>
            <input value={inputValue} onChange={handleChange}></input>
            <button onClick={handleSubmit}>
                확인
            </button>
        </div>
    )
}
export default App; 