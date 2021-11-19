import React from 'react';
// import AddItemForm from '../AddItemForm/AddItemForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import Item from '../Item/Item';
// import 
import { useHistory } from "react-router-dom";

function EditPage1() {
    const history = useHistory();
    const itemDetails = useSelector(store => store.selectedReducer)
    const dispatch = useDispatch();

    console.log(itemDetails)

    //delete user skate spot 
    const handleDelete = (itemDetails) => {
        dispatch({ type: 'DELETE_ITEM', payload: itemDetails })
      }

    return (


        <div>
            <h3>Address</h3>
            <h4>{itemDetails.address}</h4>

            <img src={itemDetails.image_url} />

            <h3>Comments</h3>
            <h4>{itemDetails.comments}</h4>
            <button onClick={() => {history.push(`/updateForm/${itemDetails.id}`)
            }}>Update</button>
                <button onClick={() =>handleDelete(itemDetails)}>Delete</button>
                
        </div>

    )
}



export default EditPage1;