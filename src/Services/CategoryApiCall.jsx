import { tokenAxios } from "./BaseApiCall";

export const getAllCategory = () =>{
    return tokenAxios.get('category/getAllCategory')
    .then((response)=>response.data)
    .catch((error)=>error.data)
}