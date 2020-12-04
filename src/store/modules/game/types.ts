import { ActionType } from 'typesafe-actions'
import * as actions from './actions'

export type GameAction = ActionType<typeof actions>

export interface GameState {
  verdadeiro: string | null
}
