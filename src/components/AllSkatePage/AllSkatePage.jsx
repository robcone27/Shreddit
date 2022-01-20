import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './AllSkatePage.css';


function AllSkatePage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const skateSpot = useSelector((store) => store.userSkateReducer);
    const [likeCount, setLikeCount] = useState(3);

    //get user skate spots from db
    useEffect(() => {
        dispatch({ type: 'FETCH_ITEMS' });
    }, []);
    // adds like to users item
    const onLike = () => {
        console.log('clicked');
        setLikeCount(likeCount + 1);
    }
    //function to send new item to the saga, then to the reducer
    const addLike = (event) => {
        event.preventDefault();
        dispatch({ type: 'ADD_ITEM', payload: newItem });
        console.log(`clicked, added a new item`);
    };

    return (
        <div className="execute">
            <div className="container">
                <h2>Skate Feed</h2>
            </div>
            <div className="ohhYeah">
                <Card sx={{ maxWidth: 400 }}>
                    <div className="userName">
                        Rob C
                    </div>

                    <CardMedia
                        component="img"
                        height="200"
                        image="https://assets.vice.com/content-images/contentimage/no-slug/cd286eb2e50463cec2bb1536ca377baf.jpg"
                        alt="skate spot"
                    />

                    <CardContent className="skateCard">
                        <Typography className="skateColor1" variant="body2" >
                            Address
                        </Typography>

                        <Typography className="skateText" gutterBottom variant="h6" component="div">
                            236 Thomas Ave S Minneapolis, MN
                        </Typography>

                        <Typography className="skateColor1" variant="body2" >
                            Awesome bank to skate
                        </Typography>
                    </CardContent>

                    <CardActions>
                        <Button onClick={onLike} size="small">Likes {likeCount} </Button>
                    </CardActions>
                </Card>
            </div>


            {skateSpot.map((item) => (
                <div className="ohhYeah">

                    <Card sx={{ maxWidth: 400 }}>
                        <div className="userName">
                            {item.username}
                        </div>

                        <CardMedia
                            component="img"
                            height="200"
                            image={item.image_url}
                            alt="skate spot"
                        />

                        <CardContent className="skateCard">
                            <Typography className="skateColor1" variant="body2" >
                                Address
                            </Typography>

                            <Typography className="skateColor" gutterBottom variant="h6" component="div">
                                {item.address}
                            </Typography>

                            <Typography className="skateColor1" variant="body2" >
                                {item.comments}
                            </Typography>

                        </CardContent>

                        <CardActions>
                            <Button size="small">Likes {item.likes}</Button>
                        </CardActions>
                    </Card>
                </div>
            ))}
        </div>
    );
}

export default AllSkatePage;
