import { useDispatch } from 'react-redux';
import { useState } from 'react';
import React from 'react';
import AddSpotForm from '../AddSpotForm/AddSpotForm';
import './AddSpotPage.css';

function AddSpotPage(){

return(
    <>
    <div>
    <h2 className="yeah">Add Skate Spot</h2>
    </div>
    <AddSpotForm />
    </>
)
}


export default AddSpotPage;