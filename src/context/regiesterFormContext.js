import React, { useState, createContext, useContext, useEffect } from 'react';

const RegisterContext = createContext({});
const useRegister = () => useContext(RegisterContext);


function RegisterProvider(props) {
    const [registerData, setRegisterData] = useState({});

    return <RegisterContext.Provider    value={registerData, setRegisterData} {...props} />
}

//todo: later
// function withRegisterWatcher(Component) {
//     return function(props) {

//             const {setRegisterData} = useRegister();

//         useEffect(()=>{

//         }, [])


//         return React.createElement(Component, props);
//     }
// }

export {
    RegisterProvider,
    useRegister
}