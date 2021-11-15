

import React from 'react';
// import AddItemForm from '../AddItemForm/AddItemForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import Item from '../Item/Item';

function TestPage() {
  const dispatch = useDispatch();

  const skateSpot = useSelector((store) => store.userSkateReducer);

  useEffect(() => {
    dispatch({ type: 'FETCH_ITEMS' });
  }, []);
  console.log(skateSpot);
  return ( 
    <div className="container">
      <h2>Your Skate Spots</h2>

      {skateSpot.map((item) => (
        // <Item key={item.id} item={item} />
        <div>
          <h4>{item.comments}</h4>
          <h4 className="pic">{item.address}</h4>
          <img src={item.image_url} alt="" />
        </div>
      ))}


      {/* //add item to the shelf. KD */}
      {/* <AddItemForm/> */}
    </div>
  );
}

export default TestPage;
