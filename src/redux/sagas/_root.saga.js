import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import userSkateSaga from './userSkate.saga';
import deleteSaga from './delete.saga';
import editSagaListener from './edit.saga';
import allSkateSaga from './allSkate.saga';

export default function* rootSaga() {
  yield all([
    loginSaga(), 
    registrationSaga(),
    userSaga(),
    userSkateSaga(),
    deleteSaga(),
    editSagaListener(),
    allSkateSaga(),
  ]);
}
