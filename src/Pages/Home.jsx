import { Box, Button } from "@mui/material";
import Base from "../Components/Base";
import Paper from '@mui/material/Paper';
import { useState,useEffect } from "react";
import Grid from '@mui/material/Grid';
import PostCard from "../Components/PostCard";
import { getAllPost } from "../Services/PostApiCall";

function Home() {
    const [allPost, setAllPost] = useState();
    useEffect(()=>{
        getAllPost().then((data)=>{
            setAllPost(data)
            console.log(allPost);
        }).catch(()=>{
            console.log("Error in api call catch in Home");
        })
    },[])

    return (
        <Base>
            <div>
                <Box>
                    <Grid container
                        spacing={1}
                        margin="auto"
                        alignItems="center"
                        justify="center"
                        columnSpacing={{ xs: 1, sm: 1, md: 1 }}
                        /* style={{ display: "flex", justifyContent: "center" }} */>
                            {
                                allPost?.map((data)=>(
                                    <Grid item xs={4} display="flex" justifyContent="center" alignItems="center">
                                        <PostCard {...data}/>
                                    </Grid >
                                ))
                            }
                        
                    </Grid>
                </Box>
            </div>
        </Base>

    );
}

export default Home;