import { useDispatch } from 'react-redux';
import { useState } from 'react';
//import for functionality

function AddSpotForm() {

    //initialize dispatch 
    const dispatch = useDispatch();

    //hold new item in state
    const [newItem, setNewItem] = useState({
        comments: '',
        image_url: '',
        address: '',
    });
    //will set local state to inputs passed in 
    const handlePropertyChange =(event, property) => {
        console.log('event happened', event);
        setNewItem({...newItem, [property]: event.target.value})
    };

    //function to send new item to the saga, then to the reducer
    const addNewItem = (event) => {
        event.preventDefault();
        dispatch({ type: 'ADD_ITEM', payload: newItem });
        console.log(`clicked, added a new item`);
    };

    //ADD AN ITEM FORM 

    return (<>
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
            <button
            type="submit">Add Skate Spot</button>

        </form>

    </>
    )
}


export default AddSpotForm;