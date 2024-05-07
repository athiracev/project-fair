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


export const addProject = async (data, header) => {
    return await commonApi("POST", `${base_url}/addproject`, data, header)
}