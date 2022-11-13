import { tokenAxios } from "./BaseApiCall";

export const getAllPost = () =>{
    return tokenAxios.get('post/getAllPost')
    .then((response)=>response.data)
    .catch((error)=>error.data)
}