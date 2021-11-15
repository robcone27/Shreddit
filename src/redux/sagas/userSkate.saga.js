import axios from "axios";
import { put, takeLatest } from 'redux-saga/effects';

function* fetchItems(action) {
    try {
        const response = yield axios.get('/api/skateSpots');
        yield put({ type: 'SET_ITEMS', payload: response.data });
    } catch (err) {
        yield put({ type: 'FETCH_ITEMS_ERROR' });
        console.log(err);
    }
}






 function* userSkateSaga() {
    yield takeLatest('FETCH_ITEMS', fetchItems)
}

export default userSkateSaga;