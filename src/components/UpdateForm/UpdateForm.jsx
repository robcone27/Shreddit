import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './UpdateForm.css';

function UpdateForm() {

    //initialize dispatch 
    const itemDetails = useSelector(store => store.selectedReducer)
    const dispatch = useDispatch();
    const history = useHistory();
    const [spot, setSpot] = useState(itemDetails)
    const { item_id } = useParams();

    // will set local state to inputs passed in 
    const handlePropertyChange = (event, property) => {
        console.log('event happened', event);
        setSpot({ ...itemDetails, [property]: event.target.value })
    };

    // function to send new item to the saga, then to the reducer
    const runUpdateItem = (event) => {
        event.preventDefault();
        const response = confirm("Do you want to update this spot?")
        if (response === true) {
            let path = `/home`;
            dispatch({ type: 'UPDATE_ITEM', payload: spot });
            console.log(`clicked, added a new item`, spot);
            history.push(path);
        }
    };

    // change path on cancel back to home page 
    const routeChange = () => {
        let path = `/home`;
        history.push(path);
    }

    //ADD AN ITEM FORM 
    return (<>
        <div className="container">
            <h2>Update Skate Spot</h2>
        </div>

        <form onSubmit={runUpdateItem}>
            <div className="formText">
                <TextField fullWidth label="Comments" id="fullWidth" variant="filled"
                    type="text"
                    value={spot.comments}
                    onChange={(event) => handlePropertyChange(event, 'comments')}
                />
            </div>

            <div className="formText">
                <TextField fullWidth label="Picture" id="fullWidth" variant="filled"
                    type="text"
                    value={spot.image_url}
                    onChange={(event) => handlePropertyChange(event, 'image_url')}
                />
            </div>

            <div className="formText">
                <TextField fullWidth label="Address" id="fullWidth" variant="filled"
                    type="text"
                    value={spot.address}
                    onChange={(event) => handlePropertyChange(event, 'address')}
                />
            </div>

            <div className="updateFormButtons">
                {/* <button type="submit">Update</button> */}
                <Button variant="contained" type="submit">Update</Button>
            </div>

            <div className="updateFormButtons">
                <Button variant="contained" onClick={routeChange}>Cancel</Button>
            </div>
        </form>
    </>
    )
}

export default UpdateForm;