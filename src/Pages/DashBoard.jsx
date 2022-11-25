import Base from "../Components/Base";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Box } from "@mui/system";
import { Button, ButtonGroup } from "@mui/material";
import { useState, useEffect } from "react";
import { getAllCategory } from "../Services/CategoryApiCall";
import ReactQuill from "react-quill";
import "../App.css"
import "../../node_modules/react-quill/dist/quill.snow.css";
import { createPost } from "../Services/PostApiCall";
import { getCurrentUserDetail } from "../Auth/AuthLocalStorage";

function DashBoard() {
    const [allCategory, setAllCategory] = useState();
    const [category, setCategory] = useState();
    const [content, setContent] = useState();
    const [post, setPost] = useState("");
    const [user, setUser] = useState(undefined);
    useEffect(() => {
        getAllCategory().then((data) => {
            console.log(data);
            setAllCategory(data);
            console.log(allCategory);
        }).catch(() => {
            console.log("Error in api call catch in Home");
        })
        console.log(getCurrentUserDetail())
        setUser(getCurrentUserDetail())

    }, [])

    


    const fieldChange = (event) => {
        setPost({ ...post, [event.target.name]: event.target.value })
    }

    const savePost = () => {
        console.log("I clicked");
        post['userId'] = user.userId;
        post['content'] = content;
        console.log(post)
        createPost(post).then((data)=>{
        }).catch((err)=>{
            console.log(err);
        })
        
    }

    return (<Base  >
        <div className="dashbordContainer">
            <div className="title-create-post">
                <label style={{ margin: "7px" }} for="title">Enter Title</label>

                <TextField fullWidth label="Title" id="fullWidth" placeholder="Enter title here"
                    sx={{ input: { color: "white" } }}
                    style={{

                        color: "white",
                        background: "#292929"
                    }}
                    value = {post.title}
                    name="title"
                    onChange={fieldChange}
                />

            </div>

            <div className="category">
                <label style={{ margin: "7px" }} for="title">Choose Category</label>
                <br></br>
                <Box width='700px'>
                    <TextField
                        component="form"
                        sx={{ input: { color: "white" } }}
                        style={{

                            color: "white",
                            background: "#292929"
                        }}
                        select
                        fullWidth
                        label="Select Category"
                        value={category}
                        name="categoryId"
                        onChange={fieldChange}
                    >
                        {
                            allCategory?.map(category => <MenuItem key={category.categoryId} value={category.categoryId} > {category.title}</MenuItem>)
                        }
                    </TextField>
                </Box>
            </div>
            <div className="texteditor">
                <h3>Enter your content</h3>
                <div className="texteditorwrapper">
                    <ReactQuill
                        placeholder="Write your content"
                        style={{ height: "400px", color: "white" }}
                        onChange={setContent}
                        value={content}  
                    />
                </div>
            </div>
            <div className="buttonsAuth">

                <ButtonGroup variant="contained" >
                    <Button style={{
                        backgroundColor: "#424244",
                        borderColor: "grey",
                        fontSize: "15px",
                        
                    }}
                    onClick={savePost}
                    
                    >Save</Button>
                    <Button
                        style={{
                            backgroundColor: "#424244",
                            borderColor: "grey",
                            fontSize: "15px"
                        }}>Reset</Button>
                </ButtonGroup>
            </div>
        </div>

    </Base>);
}

export default DashBoard;