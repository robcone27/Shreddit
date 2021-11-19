import axios from "axios";
import { put, takeLatest } from 'redux-saga/effects';

//saga GET from user info from server
function* fetchItems(action) {
    try {
        const response = yield axios.get('/api/skateSpots');
        yield put({ type: 'SET_ITEMS', payload: response.data });
    } catch (err) {
        yield put({ type: 'FETCH_ITEMS_ERROR' });
        console.log(err);
    }
}

//saga GET from all user info from server
// function* fetchUserItems(action) {
//     try {
//         const response = yield axios.get('/api/skateSpots');
//         yield put({ type: 'FETCH_ITEMS', payload: response.data });
//     } catch (err) {
//         yield put({ type: 'FETCH_ITEMS_ERROR' });
//         console.log(err);
//     }
// }
//saga POST to server
function* addItem(action) {
    try {
        console.log('New Item', action.payload);
        yield axios.post('/api/skateSpots', action.payload);

        yield put({ type: 'FETCH_ITEMS' })
    } catch (error) {
        console.log('POST ERROR', error);
    }
}

// function* selectedItem(action) {
//     try {
//         //selected movie, action.payload will be selected move from /details
//         const movie = action.payload;
//         // console.log('IN SELECTED MOVIE', movie);
//         const movieDetails = yield axios.post(`/api/movie/details/${movie.id}`);
//         // console.log('IN FUNCTION', movieDetails);
//         yield put({ type: 'SET_ITEM_DETAIL', payload: movieDetails.data })
//     } catch (error) {
//         console.log('error in selectedMovie', error);
//     }
// }





 function* userSkateSaga() {
    yield takeLatest('FETCH_ITEMS', fetchItems);
    yield takeLatest('ADD_ITEM', addItem);
    // yield takeLatest('FETCH_ITEMS', fetchUserItems);
}

export default userSkateSaga;