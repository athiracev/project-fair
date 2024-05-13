import { commonApi } from './commonApi'
import base_url from './server_url'




//register
export const userRegister = async (data) => {

    return await commonApi("POST", `${base_url}/register`, data, "")

}

//login

export const userLogin = async (data) => {
    return await commonApi("POST", `${base_url}/login`, data, "")
}

//add project

export const addProject = async (data, header) => {
    return await commonApi("POST", `${base_url}/addproject`, data, header)
}


//home project

export const homeProjects = async () => {
    return await commonApi("GET", `${base_url}/home-projects`, "", "")
}


//all projects

export const allProjects = async (header) => {
    return await commonApi("GET", `${base_url}/all-projects`, "", header)

}


//user project

export const userProjects = async (header) => {
    return await commonApi("GET", `${base_url}/user-projects`, "", header)
}

//edit-project

export const editProject= async(id,data,header)=>{
    return await commonApi('PUT',`${base_url}/edit-project/${id}`,data,header)
}