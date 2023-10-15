import React, { Suspense } from "react";
import {lazy} from "react";

const MainLazy = lazy<React.ComponentType>(() =>
    new Promise<{ default: React.ComponentType }>(resolve => {
        setTimeout(() => {
            import('./MainPage')
                .then(module => resolve(module))
        }, 1500);
    })
);

const MainPageAsync = () => {
    return (
        <React.Fragment>
            <Suspense fallback={<div>Loading...</div>}>
                <MainLazy />
            </Suspense>
        </React.Fragment>
    )
}

export default MainPageAsync