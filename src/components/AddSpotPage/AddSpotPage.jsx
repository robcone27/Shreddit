import { useDispatch } from 'react-redux';
import { useState } from 'react';
import React from 'react';
import AddSpotForm from '../AddSpotForm/AddSpotForm';
import './AddSpotPage.css';

function AddSpotPage() {

    return (
        <>
            <div className></div>
            <h2 className="addSpot">Add Skate Spot</h2>

            <AddSpotForm />

        </>
    )
}


export default AddSpotPage;