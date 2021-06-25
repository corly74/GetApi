import { call, put, takeLatest, fork } from 'redux-saga/effects';
import {
    LOAD_TABLE,


}from './constants'
import {
   loadTableSucess,
   loadTableError,

}from './action'
import {ApiFunction} from '../api/apiFunction'

const projectUrl = 'https://chtair.iot.hinet.services/iot/v1/device';


export function* loadingTale(action){
  console.log(action.abc);
    try {
        const res = yield call(() =>
          ApiFunction.get(projectUrl).then(response => response),
        );
    console.log(res)
        yield put(loadTableSucess(res.data));
      } catch (err) {
        yield put(loadTableError(err));
      }

}


export default function* projectSaga() {
    // See example in containers/HomePage/saga.js
    yield takeLatest(LOAD_TABLE, loadingTale);

  }
