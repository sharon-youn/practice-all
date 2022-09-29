import React, {useMemo, useState} from 'react';

const hardCalculate = (number)=> {
    console.log('어려운 계산!')
    for(let i =0; i< 9999999; i++) {} //생각하는 시간
    return number + 10000
}
const easyCalculate = (number)=> {
    console.log('짱 쉬운 계산!')
    return number + 1;
}
function App() {
    const [hardNumber, setHardNumber] = useState(1);
    const [easyNumber, setEasyNumber] = useState(1)
    // const hardSum = hardCalculate(hardNumber);
    // hardNumber가 불리지 않으면 원래 그 값을 재사용!
    const hardSum = useMemo(()=> {
        return hardCalculate(hardNumber)
    },[hardNumber])
// easyNumber를 불렀을때 easySum만 불림
    const easySum = easyCalculate(easyNumber)

    return (
        <div>
            <h3>어려운 계산기</h3>
            <input
            type="number"
            value={hardNumber}
            onChange={(e) => setHardNumber(parseInt(e.target.value))}/>
                <span> + 10000 = {hardSum}</span>
            
        
       
         <h3>쉬운 계산기</h3>
         <input
         type="number"
         value={easyNumber}
         onChange={(e) => setEasyNumber(parseInt(e.target.value))}/>
             <span> + 1 = {easySum}</span>
        
     </div>
    )

}
export default App;