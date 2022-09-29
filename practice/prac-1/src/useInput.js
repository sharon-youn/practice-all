// 우리가 만든 custom hook

import { useState } from "react";

// use키워드로 시작하기! 
// useInput 값에 initialValue라는 초기값을 전달

export function useInput(initialValue, submitAction) {
    // useStateㅇ
    const [inputValue, setInputValue] = useState(initialValue);

    const handleChange = (e)=>{
        setInputValue(e.target.value);
    };
    const handleSubmit =() => {
        setInputValue("");
        submitAction(inputValue)
    }
    return  [inputValue, handleChange, handleSubmit]
}