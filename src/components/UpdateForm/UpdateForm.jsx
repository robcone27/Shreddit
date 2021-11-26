import { useDispatch } from 'react-redux';
import { useState } from 'react';
//import for functionality
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
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

    // //will set local state to inputs passed in 
    const handlePropertyChange = (event, property) => {
        console.log('event happened', event);
        setSpot({ ...itemDetails, [property]: event.target.value })
    };

    // //function to send new item to the saga, then to the reducer
    const runUpdateItem = (event) => {
        event.preventDefault();
        let path = `/home`;
        dispatch({ type: 'UPDATE_ITEM', payload: spot });
        console.log(`clicked, added a new item`, spot);
        history.push(path);
    };

    // change path on cancel back to home page 
    const routeChange = () => {
        let path = `/home`;
        history.push(path);
    }
    //ADD AN ITEM FORM 
    return (<>
        <h2>Update Skate Spot</h2>

        <form onSubmit={runUpdateItem}>
            <TextField fullWidth label="Comments" id="fullWidth" variant="filled"
                // placeholder="comments"
                type="text"
                value={spot.comments}
                onChange={(event) => handlePropertyChange(event, 'comments')}
            />
            <TextField fullWidth label="Picture" id="fullWidth" variant="filled"
                // placeholder="image_url"
                type="text"
                value={spot.image_url}
                onChange={(event) => handlePropertyChange(event, 'image_url')}
            />
            <TextField fullWidth label="Address" id="fullWidth" variant="filled"
                placeholder="address"
                type="text"
                value={spot.address}
                onChange={(event) => handlePropertyChange(event, 'address')}
            />
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