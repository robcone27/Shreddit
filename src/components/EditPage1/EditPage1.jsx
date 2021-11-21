import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function EditPage1() {
    const history = useHistory();
    const itemDetails = useSelector(store => store.selectedReducer)
    const dispatch = useDispatch();


    //delete user skate spot and return to home page 
    const handleDelete = (itemDetails) => {
        confirm("Do you want to delete this spot?")
        dispatch({ type: 'DELETE_ITEM', payload: itemDetails })
        let path = `/home`;
        history.push(path);
    }

    // change path on cancel back to home page 
    const routeChange = () => {
        let path = `/home`;
        history.push(path);
    }

    return (<>

     
        <Button variant="contained" onClick={routeChange}>Back</Button>
            

        <div>

            <h3>Address</h3>
            <h4>{itemDetails.address}</h4>

            <img src={itemDetails.image_url} />

            <h3>Comments</h3>
            <h4>{itemDetails.comments}</h4>

              <Stack spacing={12} direction="row">  
            <Button variant="contained" onClick={() => {
                history.push(`/updateForm/${itemDetails.id}`)
            }}>Update</Button>

            <Button variant="contained" onClick={() => handleDelete(itemDetails)}>Delete</Button>
            </Stack>
        </div>
    </>

    )
}



export default EditPage1;