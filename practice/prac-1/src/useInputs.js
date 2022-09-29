import { useState, useCallback } from 'react';

// 여러 input에 의한 상태 변경을 할 때 쓸수있는 useInputs hooks

function setInputs(initialForm) {
    const [form, setForm] = useState(initialForm);
    // change
    const onChange = useCallback(e => {
        const {name, value} = e.target;
        setForm(form => ({...form, [name]:value}))
    }, [])
    const reset = useCallback(()=>setForm(initialForm), [initialForm])
    return [form, onChange, reset]
}
export default useInputs;