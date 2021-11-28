import { useDispatch } from 'react-redux';
import { useState } from 'react';
import React from 'react';
import AddSpotForm from '../AddSpotForm/AddSpotForm';
import './AddSpotPage.css';

function AddSpotPage() {

    return (
        <>
            <div className="container">
            <h2 className="addSpot">Add Skate Spot</h2>
            </div>
            <AddSpotForm />

        </>
    )
}


export default AddSpotPage;