import axios from "axios";
import { put, takeLatest } from 'redux-saga/effects';

//saga GET from server
function* fetchItems(action) {
    try {
        const response = yield axios.get('/api/allSkate');
        yield put({ type: 'SET_USER_ITEMS', payload: response.data });
    } catch (err) {
        yield put({ type: 'FETCH_USER_ITEMS_ERROR' });
        console.log(err);
    }
}

function* allSkateSaga() {
    yield takeLatest('FETCH_USER_ITEMS', fetchItems)
   
}

export default allSkateSaga;
