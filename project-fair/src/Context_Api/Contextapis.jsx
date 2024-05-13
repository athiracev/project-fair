import React, { createContext, useState } from 'react'

//creating context object
export const addProjectResponseContext = createContext()
export const editProjectResponseContext = createContext()

function Contextapis({ children }) {

    //globally accessible state
    const [addProjectResponse, setAddProjectResponse] = useState("")
    const [editProjectResponse, setEditProjectResponse] = useState("")

    return (
        <>
       {/* provide the object to children */}
            <addProjectResponseContext.Provider value={{ addProjectResponse, setAddProjectResponse }}>
                <editProjectResponseContext.Provider value={{editProjectResponse,setEditProjectResponse}}>
                    {children}
                </editProjectResponseContext.Provider>
            </addProjectResponseContext.Provider>
        </>
    )
}

export default Contextapis
