import React from 'react';
import { Suspense, lazy } from 'react';

const AboutLazy = lazy<React.ComponentType>(() => 
    new Promise<{ default: React.ComponentType }>(resolve => {
    setTimeout(() => {
        import('./AboutPage')
            .then(module => resolve({ default: module.default }))
    }, 1500);
}));

const AboutPageAsync = () =>{

    return(
        <React.Fragment>
            <Suspense fallback={<div>Loading...</div>}>
               <AboutLazy /> 
            </Suspense>
        </React.Fragment>
    )
} 

export default AboutPageAsync;