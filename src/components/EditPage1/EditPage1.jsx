import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './EditPage1.css';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';



function EditPage1() {
    const history = useHistory();
    const itemDetails = useSelector(store => store.selectedReducer)
    const dispatch = useDispatch();
    // const [spot, setSpot] = useState(itemDetails)

    // delete user skate spot and return to home page 
    const handleDelete = (itemDetails) => {
        const response = confirm("Do you want to delete this spot?")
        if (response === true) {
            dispatch({ type: 'DELETE_ITEM', payload: itemDetails })
            let path = `/home`;
            history.push(path);
        }
    }

    // const handleDelete = (itemDetails) => {
    //     <Alert severity="warning">
    //     <AlertTitle>Warning</AlertTitle>
    //     This is a warning alert — <strong>check it out!</strong>
    //   </Alert>
    //     const response = confirm("Do you want to delete this spot?")
    //     if (response === true) {
    //         dispatch({ type: 'DELETE_ITEM', payload: itemDetails })
    //         let path = `/home`;
    //         history.push(path);
    //     }
    // }

    // change path on cancel back to home page 
    const routeChange = () => {
        let path = `/home`;
        history.push(path);
    }
    console.log(itemDetails)
    return (<>
        <div>
            <div className="container1">
                <h3>Address</h3>
                <h4>{itemDetails.address}</h4>
            </div>

            <img src={itemDetails.image_url} />

            <h4 className="comments">{itemDetails.comments}</h4>

            <Stack spacing={12} direction="row">
                <Button variant="contained" onClick={() => {
                    history.push(`/updateForm/${itemDetails.id}`)
                }}>Update</Button>
                <Button variant="contained" onClick={routeChange}>Back</Button>
                <Button variant="contained" onClick={() => handleDelete(itemDetails)}>Delete</Button>
            </Stack>
        </div>
    </>
    )
}



export default EditPage1;