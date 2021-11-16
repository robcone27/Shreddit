import React from 'react';
// import AddItemForm from '../AddItemForm/AddItemForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import Item from '../Item/Item';
// import 
import { useHistory } from "react-router-dom";

function TestPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const skateSpot = useSelector((store) => store.userSkateReducer);

  //get user skate spots from db
  useEffect(() => {
    dispatch({ type: 'FETCH_ITEMS' });
  }, []);

 
  const routeChange = () =>{ 
    let path = `addSpotPage`; 
    history.push(path);
  }
  

  return (
    <div className="container">
      <button onClick={routeChange}>Add New Skate Spot</button>
      
      <h2>Your Skate Spots</h2>

      

      {skateSpot.map((item) => (
        // <Item key={item.id} item={item} />
        <div>
          <img src={item.image_url} alt="skate spot pic" />

          {/* <h3>Comment</h3> */}
          <h4>{item.comments}</h4>

          <h3>Address</h3>
          <h4>{item.address}</h4>
        </div>
      ))}


      {/* //add item to the shelf. KD */}
      {/* <AddItemForm/> */}
    </div>
  );
}

export default TestPage;
