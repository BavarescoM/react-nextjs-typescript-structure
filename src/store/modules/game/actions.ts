import { action } from 'typesafe-actions'

export function play() {
  return action('@game/PLAY')
}

// export function setJump({ disableBtn }: { disableBtn: number }) {
//   return action('@game/SET_JUMP', { disableBtn });
// }
