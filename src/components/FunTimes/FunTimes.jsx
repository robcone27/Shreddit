import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import './TestPage.css';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './FunTimes.css';


function FunTimes() {
    const dispatch = useDispatch();
    const history = useHistory();

    const skateSpot = useSelector((store) => store.userSkateReducer);
    const allSkate = useSelector((store) => store.allSkateReducer);


    //get user skate spots from db
    useEffect(() => {
        dispatch({ type: 'FETCH_USER_ITEMS' });
    }, []);


    const routeChange = () => {
        let path = `addSpotPage`;
        history.push(path);
    }
    const toEditPage = (item) => {
        console.log('clicked me', item)
        dispatch({ type: 'SET_SELECTED_ITEM', payload: item });
        history.push('/editPage')
    }

    return (
        <div>
            {/* <button onClick={routeChange}>Add New Skate Spot</button> */}
            {/* <Button variant="contained" onClick={routeChange}>Add New Skate Spot</Button> */}

         

            <div className="addSpotButton">
                <Button variant="contained" onClick={routeChange}>Add New Skate Spot</Button>
            </div>

            <h2 className="yourSkate">Your Skate Spots</h2>
            {allSkate.map((item) => (

                <div className="ohhYeah">

                    <Card sx={{ maxWidth: 400 }}>
                        <CardActions>


                        </CardActions>
                        <CardMedia
                            component="img"
                            height="200"
                            image={item.image_url} onClick={() => toEditPage(item)}
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
export default FunTimes;
