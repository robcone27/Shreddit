import React from 'react';
// import {useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './AllSkatePage.css';


function AllSkatePage() {
    const dispatch = useDispatch();
    const history = useHistory();
    // const user = useSelector((store) => store.user);
    const skateSpot = useSelector((store) => store.userSkateReducer);
    //   const allSkate = useSelector((store) => store.allSkateReducer);




    //get user skate spots from db
    useEffect(() => {
        dispatch({ type: 'FETCH_ITEMS' });
    }, []);


    const onLike = (item) => {
        //dispatch to saga
        //saga needs ot make PUT request 
        //know the item id 



    }

    //function to send new item to the saga, then to the reducer
    const addLike = (event) => {
        event.preventDefault();
        dispatch({ type: 'ADD_ITEM', payload: newItem });
        console.log(`clicked, added a new item`);
    };


    return (
        <div>
 <div className="container">
            <h2>Skate Feed</h2>
            </div>

            



            {skateSpot.map((item) => (
                <div className="ohhYeah">

                    <Card sx={{ maxWidth: 400 }}>
                        {/* <CardActions> */}
                            <div className="userName">
                            {item.username}
                            </div>

                        {/* </CardActions> */}
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
                            {/* <Button size="small">Learn More</Button> */}

                        </CardActions>
                    </Card>

                </div>
            ))}

        </div>
    );
}

export default AllSkatePage;
