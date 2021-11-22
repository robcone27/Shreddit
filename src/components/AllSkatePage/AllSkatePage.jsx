import React from 'react';
// import {useSelector} from 'react-redux';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

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

    //   //delete user skate spot 
    //   const handleDelete = (item) => {
    //     dispatch({ type: 'DELETE_ITEM', payload: item })
    //   }


    //   const routeChange = () => {
    //     let path = `addSpotPage`;
    //     history.push(path);
    //   }
    //   const toEditPage = (item) => {
    //     console.log('clicked me', item)
    //     dispatch({ type: 'SET_SELECTED_ITEM', payload: item });
    //     history.push('/editPage')
    // }

    return (
        <div>
            {/* <button onClick={routeChange}>Add New Skate Spot</button> */}

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



                    {/* <button onClick={() =>handleDelete(item)}>Delete</button>
          <img onClick={() =>toEditPage(item)} src={item.image_url} alt={item.comments} /> */}

                </div>
            ))}

        </div>
    );
}

export default AllSkatePage;
