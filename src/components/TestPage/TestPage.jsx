import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import './TestPage.css';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';

function TestPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const skateSpot = useSelector((store) => store.userSkateReducer);
  const allSkate = useSelector((store) => store.allSkateReducer);


  //get user skate spots from db
  useEffect(() => {
    dispatch({ type: 'FETCH_USER_ITEMS' });
  }, []);


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
    <div>
      {/* <button onClick={routeChange}>Add New Skate Spot</button> */}
      <Button variant="contained" onClick={routeChange}>Add New Skate Spot</Button>

      <h2>Your Skate Spots</h2>



      {allSkate.map((item) => (
   
        <div>
         
          <h3>Address</h3>
          <h4>{item.address}</h4>
          <img onClick={() => toEditPage(item)} src={item.image_url} alt={item.comments} />
          <h4>{item.comments}</h4>
          
        </div>
      ))}

    </div>
  );
}

export default TestPage;
