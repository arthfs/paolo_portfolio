import React, { createContext, useContext, useState } from 'react'

export const context = createContext();


export default function Context({children}) {
    
    const [info,setinfo] = useState("/")
    const   changeinfo = (newinfo)=> setinfo(newinfo)
     return (
    <context.Provider value={{info,changeinfo}}>
        <>{children}</>
    </context.Provider>
  )
 
}
 
