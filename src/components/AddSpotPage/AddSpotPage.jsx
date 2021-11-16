import { useDispatch } from 'react-redux';
import { useState } from 'react';
import React from 'react';
import AddSpotForm from '../AddSpotForm/AddSpotForm';

function AddSpotPage(){

return(
    <>
    <div>
    <h1>Add Skate Spot</h1>
    </div>
    <AddSpotForm />
    </>
)
}


export default AddSpotPage;