
// index를 사용할떈 view(보여주는 용도)로 할땐 괜찮을 수 있지만

import { useState } from "react"

//다른 경우에 많은 문제점이 생김!

function App() {
    //unique한 키가 필요! 
    //unique한 key : ~id(컬럼들)
    const [list, setList] = useState([
            {"name" : "민수"},
            {"name" : "영희"},

            {"name" : "영수"}


    ])

    const addPerson = () => {
    setList()
    }

    return (
        <div className="App">
            <header className="App-header">
        {list.map((el, index)=> {
            return(
                // 이렇게 index로 넣으면 추가로 뭐가 넣어지면 인덱스도 바뀜 
                <div key={index}>
                    <span>{el.name}</span>
                    <input type="text"></input>

                </div>
            )
        })}
            </header>

        </div>
    )
}