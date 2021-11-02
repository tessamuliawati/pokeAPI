import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import pokeColor from '../Pages/pokeColor'
import charmander from '../Assets/img/charmander.png'
import '../Assets/scss/style.scss'

function PokemonDetail() {
  return (
    <>
    <div className='details' style={{ backgroundColor: '#64dbb2' }}>
      <div className='headerDetail'>
        <h1>Charmander</h1>
        <h2>#001</h2>
        <div className='abbilities'>
          <h3>Fire</h3>
          <h3>Water</h3>
        </div>
        <img src={charmander} alt='pokemon'/>
      </div>

      <div className='bottomDetail'>
        <div className='profilePokemon'>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
          <h1>test</h1>
        </div>
      </div>
    </div>
    </>
  )
}

export default PokemonDetail