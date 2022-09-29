import { useEffect } from "react";

function App() {
    // fetch 를통해 네트워크상에서 api를 가져오게 하는 기능
    // [] 단 한번만 실행

    const fetchU

   useEffect(()=> {
    // 우리가 네트워크 상에서 가져오고 싶은 data의 url을 넣어주기 
    // jsonplaceholder 홈페이지 한번 나중에 보기!
    // https://jsonplaceholder.typicode.com/
    
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((res) => console.log(res))
   }, [])
    return (
        <div>
            <h1>useFetch</h1>
           
        </div>
    )
}
export default App; 