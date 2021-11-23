import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './AddSpotForm.css';

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
        if (response === true){
        let path = `/home`;
        dispatch({ type: 'ADD_ITEM', payload: newItem });
        console.log(`clicked, added a new item`);
        history.push(path);}
    };

    const routeChange = () => {
        let path = `/home`;
        history.push(path);
    }

    return (<>
    <div className="formPanel">
        <form onSubmit={addNewItem}>
            <input
                placeholder="comments"
                type="text"
                value={newItem.comments}
                onChange={(event) => handlePropertyChange(event, 'comments')}
            />
            <input
                placeholder="image_url"
                type="text"
                value={newItem.image_url}
                onChange={(event) => handlePropertyChange(event, 'image_url')}
            />
            <input
                placeholder="address"
                type="text"
                value={newItem.address}
                onChange={(event) => handlePropertyChange(event, 'address')}
            />
            <Stack spacing={8} direction="row">
            <Button variant="contained" type="submit">Add Spot</Button>
            <Button variant="contained" onClick={routeChange}>Cancel</Button>
            </Stack>
        </form>
</div>
    </>
    )
}


export default AddSpotForm;