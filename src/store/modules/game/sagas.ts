// import { takeLatest, call, put, all, delay } from 'redux-saga/effects'
// import { ActionType } from 'typesafe-actions'
// import * as actions from './actions'
// export function* click({ payload }: ActionType<typeof actions.clickQuestion>) {
//   try {
//     const { vlCerto, entrada, qAtual, qTamanho } = payload;
//     yield put(actions.disableButton());
//     yield put(actions.colorsQuestion({ vlCerto: vlCerto, entrada: entrada }));
//     yield delay(2000);
//     if (vlCerto !== entrada) {
//       yield put(actions.setLoser());
//     } else {
//       if (qAtual === qTamanho) {
//         yield put(actions.setWinner());
//       } else {
//         yield put(actions.clearQuestion());
//         yield put(actions.nextQuestion());
//       }
//     }
//     yield put(actions.showTwo());
//     yield put(actions.enableButton());
//   } catch (err) {
//     console.log(err);
//   }
// }

// export function* lessTwo({ payload }: ActionType<typeof actions.lessTwo>) {
//   try {
//     const { correct } = payload;
//     let arr = ['a', 'b', 'c', 'd'];
//     arr.splice(arr.indexOf(correct), 1);
//     let lessOne = arr[Math.floor(Math.random() * arr.length)];
//     arr.splice(arr.indexOf(lessOne), 1);
//     let lessTwo = arr[Math.floor(Math.random() * arr.length)];
//     yield put(
//       actions.hiddenTwo({
//         esconder1: lessOne,
//         esconder2: lessTwo,
//       })
//     );
//   } catch (err) {
//     console.log(err);
//   }
// }

// export default all([
//   takeLatest('@game/CLICK_QUESTION', click),
//   takeLatest('@game/LESS_TWO_ALTERNATIVE', lessTwo),
// ])
