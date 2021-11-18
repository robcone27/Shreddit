import React from 'react';
// import AddItemForm from '../AddItemForm/AddItemForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import Item from '../Item/Item';
// import 
import { useHistory } from "react-router-dom";

function EditPage(){
    const itemDetails = useSelector(store => store.editReducer)
    return (
        <div>
        <h3>Address</h3>
        <h4>{itemDetails.address}</h4>

        <img src={itemDetails.image_url}/>
       
       <h3>Comments</h3>
        <h4>{itemDetails.comments}</h4>

        </div>
        
    )
}



export default EditPage;