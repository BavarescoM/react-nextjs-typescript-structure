import { GameState, GameAction } from './types'

const initialState: GameState = {
  verdadeiro: null
}

export default function game(
  state = initialState,
  action: GameAction
): GameState {
  switch (action.type) {
    case '@game/PLAY':
      return {
        ...state,
        verdadeiro: 'true'
      }
    default:
      return state
  }
}
