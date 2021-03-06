import { take, takeLatest, put } from "@redux-saga/core/effects";
import axios from 'axios';



function* editSaga(action) {
    try {
        //selected item, action.payload will be selected move from /details
        const item = action.payload;
        console.log('start of edit saga', item.id);
        const itemDetails = yield axios.get(`/api/editPage/${action.payload.item_id}`);
        console.log(itemDetails);
        yield put({ type: 'SET_ITEM_DETAIL', payload: itemDetails.data })
    } catch (error) {
        console.log('error in selectedMovie', error);
    }
}

function* updateItem(action) {
    try {
        yield axios.put(`/api/editPage/${action.payload.id}`, action.payload)
        yield put({ type: 'FETCH_ITEM' });
    } catch (err) {
        console.log('PUT error in saga', err)
    }
}

function* editSagaListener() {
    // yield takeLatest('SET_SELECTED_ITEM', editSaga);
    yield takeLatest('UPDATE_ITEM', updateItem);
}

export default editSagaListener