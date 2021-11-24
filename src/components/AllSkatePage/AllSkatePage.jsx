import React from 'react';
// import {useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


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

            <h2>Your Skate Feed</h2>



            {skateSpot.map((item) => (
                // <Item key={item.id} item={item} />
                <div>
                    {/* <h2>Welcome, {user.username}</h2> */}
                    <h3>Address</h3>
                    <h4>{item.address}</h4>

                    <img src={item.image_url} alt="skate spot pic" />

                    <h3>Comments</h3>
                    <h4>{item.comments}</h4>

                    <Button onClick={() => onLike(item)} variant="contained">Likes {item.likes}</Button>
                    {/* {likeCount} */}



                    {/* <button onClick={() =>handleDelete(item)}>Delete</button>
          <img onClick={() =>toEditPage(item)} src={item.image_url} alt={item.comments} /> */}

                </div>
            ))}

        </div>
    );
}

export default AllSkatePage;
