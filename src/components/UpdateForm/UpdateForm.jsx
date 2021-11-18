import { useDispatch } from 'react-redux';
import { useState } from 'react';
//import for functionality

function UpdateForm() {

    //initialize dispatch 
    const dispatch = useDispatch();

    // //hold new item in state
    const [updateItem, setUpdateItem] = useState({
        comments: '',
        image_url: '',
        address: '',
    });
    // //will set local state to inputs passed in 
    // const handlePropertyChange =(event, property) => {
    //     console.log('event happened', event);
    //     setNewItem({...newItem, [property]: event.target.value})
    // };

    // //function to send new item to the saga, then to the reducer
    const runUpdateItem = (event) => {
        event.preventDefault();
        dispatch({ type: 'UPDATE_ITEM', payload: updateItem });
        console.log(`clicked, added a new item`);
    };

    //ADD AN ITEM FORM 

    return (<>
        <form onSubmit={runUpdateItem}>
            <input
                placeholder="comments"
                type="text"
                value={updateItem.comments}
                onChange={(event) => handlePropertyChange(event, 'comments')}
            /> 
            <input
                placeholder="image_url"
                type="text"
                value={updateItem.image_url}
                onChange={(event) => handlePropertyChange(event, 'image_url')}
            />
             <input
                placeholder="address"
                type="text"
                value={updateItem.address}
                onChange={(event) => handlePropertyChange(event, 'address')}
            />
            <button
            type="submit">Update Skate Spot</button>

        </form>

    </>
    )
}


export default UpdateForm;