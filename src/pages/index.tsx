import React from 'react'
import Head from 'next/head'

import RocketseatLogo from '../assets/rocketseat.svg'

import { Container } from '../styles/pages/Home'
import { useSelector, useDispatch } from 'react-redux'
import { GameState } from '../store/createStore'
import * as AR from '../store/modules/game/actions'

const Home: React.FC = () => {
  const VR = useSelector((state: GameState) => state.game)
  console.log(VR)
  const dispatch = useDispatch()

  function testRedux() {
    dispatch(AR.play())
  }

  return (
    <Container>
      <Head>
        <title>Homepage</title>
        <button onClick={() => testRedux}>disparar</button>
      </Head>
    </Container>
  )
}

export default Home
