// import React, { createContext, useRef } from 'react';
//
// const ScrollContext = createContext(null);
//
// const ScrollProvider = ({ children }) => {
//     const targetRef = useRef(null);
//
//     return (
//         <ScrollContext.Provider value={targetRef}>
//             {children}
//         </ScrollContext.Provider>
//     );
// };
//
// export { ScrollContext, ScrollProvider };

import { createContext } from "react";

export const ScrollContext = createContext(null);