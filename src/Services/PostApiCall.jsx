import { tokenAxios } from "./BaseApiCall";

export const getAllPost = () =>{
    return tokenAxios.get('post/getAllPost')
    .then((response)=>response.data)
    .catch((error)=>error.data)
}

export const createPost = (data) =>{
    return tokenAxios.post(`post/user/${data.userId}/category/${data.categoryId}/posts`,data)
    .then((response)=>response.data)
    .catch((error)=>error.data)
}