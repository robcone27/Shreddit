import axios from "axios";
import { put, takeLatest } from 'redux-saga/effects';

//saga GET from server
function* fetchItems(action) {
    try {
        const response = yield axios.get('/api/skateSpots');
        yield put({ type: 'SET_ITEMS', payload: response.data });
    } catch (err) {
        yield put({ type: 'FETCH_ITEMS_ERROR' });
        console.log(err);
    }
}

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





 function* userSkateSaga() {
    yield takeLatest('FETCH_ITEMS', fetchItems)
    yield takeLatest('ADD_ITEM', addItem);
}

export default userSkateSaga;