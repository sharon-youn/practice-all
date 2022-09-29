/* suspense 기능을 사용하기 위해서는 import 해오기 */
import { Suspense } from "react";

const OtherComponent = React.lazy(() => import('./OtherComponent'));
const AnotherComponent = React.lazy(() => import('./AnotherComponent'))

function MyComponent() {
    return(
        <div>
            {/* 이런 식으로 React.lazy로 감싼 컴포넌트를 Suspense 컴포넌트의 하위에 렌더링 */}
            <Suspense fallback={<div>Loading...</div>}>
                {/* Suspense 컴포넌트 하위에 여러 개의 lazy 컴포넌트를 렌더링시킬 수 있음 */}
                <OtherComponent/>
                <AnotherComponent/>
            </Suspense>
        </div>
    )
} 