import CardHeader from '@mui/material/CardHeader';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography'

import { red } from '@mui/material/colors';

function PostCard(data) {
    return (
        <div style={{width:450}}>
            <Card style={{backgroundColor:"#67676a",
                    color:"white"}
                    } 
                    sx={{maxWidth:450,marginX:1,my:1}} >
                <CardHeader
                    style={{backgroundColor:"red",
                    color:"white"}} 
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            {data.user.firstName[0].toUpperCase()}
                        </Avatar>
                    }
                    title={data.title}
                    subheader={<Typography color="#ffff">{data.category.title} </Typography>}
                />
                <CardContent>
                    <Typography variant="body2" color="#ffff">
                        {data.content} 
                    </Typography>
                </CardContent>
            </Card>
        </div>

    );
}

export default PostCard;