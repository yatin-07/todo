import { put, call, takeEvery, takeLatest, StrictEffect } from 'redux-saga/effects';
import { Type } from 'typescript';
const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
//import {markCompleteAction, markIncompleteAction } from "../types/actionType"

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* delayAsync() {
  yield delay(5000);

  alert('hello');
  //yield call(myFunction());
  //yield put({ type: 'MARK_INCOMPLETE' })
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function* rootsaga() {
  yield takeEvery('DELETE_TODO', delayAsync);
}
