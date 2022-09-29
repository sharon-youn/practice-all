import { useState, useEffect } from "react";

//여러 url을 fetch할 때 쓸 수 있는 useFetch Hook
const useFetch = (initialUrl:string) => {
    // url 상태
    const [url, setUrl] = useState(initialUrl);
    // value 상태
    const [value, setValue] = usestate('');
    // url을 받아서 data추출
    const fetchData = () => axios.get(url).then(({data})=>setValue(Data))
   // url이 바뀔때마다 fetchData실행
    useEffect( () => {
        fetchData();
    }, [url])

    return [value]
}
export default useFetch;