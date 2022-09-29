import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import('./routes/Home'))
const About = lazy(() => import('./routes/About'))

const App = () => {
    <Router>
          {/* Suspense로 Routes로 감싸고 로딩화면으로 사용할 컴포넌트를 fallback 속성으로 설정  */}
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {/* Route에 React.lazy 분기시켜주기 */}
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>

            </Routes>
        </Suspense>
    </Router>
}