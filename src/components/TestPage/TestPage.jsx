import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './TestPage.css';
import { useHistory } from "react-router-dom";

function TestPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const skateSpot = useSelector((store) => store.userSkateReducer);
  const allSkate = useSelector((store) => store.allSkateReducer);


  //get user skate spots from db
  useEffect(() => {
    dispatch({ type: 'FETCH_USER_ITEMS' });
  }, []);

  //delete user skate spot 
  // const handleDelete = (item) => {
  //   dispatch({ type: 'DELETE_ITEM', payload: item })
  // }


  const routeChange = () => {
    let path = `addSpotPage`;
    history.push(path);
  }
  const toEditPage = (item) => {
    console.log('clicked me', item)
    dispatch({ type: 'SET_SELECTED_ITEM', payload: item });
    history.push('/editPage')
  }

  return (
    <div className="container">
      <button onClick={routeChange}>Add New Skate Spot</button>

      <h2>Your Skate Spots</h2>



      {allSkate.map((item) => (
        // <Item key={item.id} item={item} />
        <div>
          {/* <img src={item.image_url} alt="skate spot pic" /> */}
          {/* 
          <h4>{item.comments}</h4> */}

          {/* <h3>Address</h3>
          <h4>{item.address}</h4> */}
          <h3>Address</h3>
          <h4>{item.address}</h4>
          <img onClick={() => toEditPage(item)} src={item.image_url} alt={item.comments} />
          <h4>{item.comments}</h4>
          <button onClick={() => handleDelete(item)}>Delete</button>
          
          
          
          {/* <h3>Address</h3>
          <h4>{item.address}</h4>
          <img onClick={() => toEditPage(item)} src={item.image_url} alt={item.comments} />
          <h4>{item.comments}</h4> */}
        </div>
      ))}

    </div>
  );
}

export default TestPage;
