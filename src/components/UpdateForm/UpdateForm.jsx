import { useDispatch } from 'react-redux';
import { useState } from 'react';
//import for functionality
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';

function UpdateForm() {

    //initialize dispatch 
    const itemDetails = useSelector(store => store.selectedReducer)
    const dispatch = useDispatch();
    const history = useHistory();
    const [spot, setSpot] = useState(itemDetails)
    // //hold new item in state
    // const [updateItem, setUpdateItem] = useState({
    //     comments: '',
    //     image_url: '',
    //     address: '',
    // });

//       //delete user skate spot 
//   const handleDelete = (item) => {
//     dispatch({ type: 'DELETE_ITEM', payload: item })
//   }

    const { item_id } = useParams();
    console.log(item_id);
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
console.log("this is update", itemDetails);
    return (<>
        <h2>Update Skate Spot</h2>
        <form onSubmit={runUpdateItem}>
            <input
                placeholder="comments"
                type="text"
                value={spot.comments}
                onChange={(event) => handlePropertyChange(event, 'comments')}
            />
            <input
                placeholder="image_url"
                type="text"
                value={spot.image_url}
                onChange={(event) => handlePropertyChange(event, 'image_url')}
            />
            <input
                placeholder="address"
                type="text"
                value={spot.address}
                onChange={(event) => handlePropertyChange(event, 'address')}
            />
            <div>
                <button type="submit">Update</button>
            </div>

            <div>
                <button onClick={routeChange}>Cancel</button>
            </div>
        
        </form>

    </>
    )
}


export default UpdateForm;