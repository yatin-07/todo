import { takeEvery, StrictEffect, delay } from 'redux-saga/effects';

export function* delayAsync(): Generator {
  yield delay(2000);
  alert('Deleted todo');
}

export function* rootsaga(): Generator<StrictEffect> {
  yield takeEvery('DELETE_TODO', delayAsync);
}
