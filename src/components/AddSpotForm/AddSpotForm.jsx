import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './AddSpotForm.css';



import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function AddSpotForm() {

    //initialize dispatch 
    const dispatch = useDispatch();
    const history = useHistory();

    //hold new item in state
    const [newItem, setNewItem] = useState({
        comments: '',
        image_url: '',
        address: '',
    });
    //will set local state to inputs passed in 
    const handlePropertyChange = (event, property) => {
        console.log('event happened', event);
        setNewItem({ ...newItem, [property]: event.target.value })
    };

    //function to send new item to the saga, then to the reducer
    const addNewItem = (event) => {
        event.preventDefault();
        const response = confirm("Do you want to add a new spot?")
        if (response === true) {
            let path = `/home`;
            dispatch({ type: 'ADD_ITEM', payload: newItem });
            console.log(`clicked, added a new item`);
            history.push(path);
        }
    };

    const routeChange = () => {
        let path = `/home`;
        history.push(path);
    }

    return (<>
        <div>
   
            <form onSubmit={addNewItem}>
           
                <div className="test">
                <TextField fullWidth label="Comments" id="fullWidth" variant="filled"
                        // placeholder="comments"
                        type="text"
                        value={newItem.comments}
                        onChange={(event) => handlePropertyChange(event, 'comments')}
                    />
                </div>

                <div className="test">
                <TextField fullWidth label="Picture" id="fullWidth" variant="filled"
                        // placeholder="image_url"
                        type="text"
                        value={newItem.image_url}
                        onChange={(event) => handlePropertyChange(event, 'image_url')}
                    />
                </div>

                <div className="test">
                <TextField fullWidth label="Address" id="fullWidth" variant="filled"
                        placeholder=""
                        type="text"
                        value={newItem.address}
                        onChange={(event) => handlePropertyChange(event, 'address')}
                    />
                </div>


                <div className="addSpotFormButtons">
                    {/* <Stack spacing={8} direction="row">  */}
                        <Button variant="contained" type="submit">Add Spot</Button>
                        </div>

                        <div className="addSpotFormButtons">
                        <Button variant="contained" onClick={routeChange}>Cancel</Button>
                    {/* </Stack> */}
                </div>
            </form>
   \
        </div>
       
    </>
    );
}


export default AddSpotForm;