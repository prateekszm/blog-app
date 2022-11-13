import { myAxios } from "./BaseApiCall"

export const login = (data) => {
    return myAxios.post('auth/login', data).then((response) => response.data)
    .catch((error)=>{
        console.log(error.response.data)
    })
}