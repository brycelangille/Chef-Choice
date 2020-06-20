import React, { Component } from 'react'
import {Link} from 'react-router-dom'
// import Layout from '../../components/shared/Layout'
import './ChefPage.scss'
import data from '../../recipe.json'
import ChefProfile from '../chef-profile/ChefProfile'

export default class ChefPage extends Component {
  constructor() {
    super()
    this.state = {
      chefs: []
    }
  }

  async componentDidMount() {
    const chefs = await data
    this.setState({ chefs })
  }

  render() {
    const { chefs } = this.state
    const allChefs = chefs.map(chef => {
      return (

        <div className='Chef-List'>
          <h3>This Week's Top Chefs:</h3>

          <div className='general-chef-display'>
            <img className='profile-pic' src={chef.img} />
            <div className='chef-page-info'>
              <h4>{chef.chefName}</h4>
              <Link to={`/chefs/${chef.chefName}`}><button>View Full Profile</button></Link>
            </div>
          </div>
          <p>Known for:{chef.knownFor}</p>
        </div>
      )
    })





    return (
      <>
        <div className='intro-header'>
          <div className='image-header'>
            <img className='image1'  src='https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80' />
            <img className='image2' src='https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' />
          </div>
          <div className='middle-block'>
            <h1>What is a Top Chef?</h1>
          </div>
          <div className='lower-half'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lorem. tantus lutus em gratum ad nausum pre catsum</p>
            <h4>Join the Program</h4>
          </div>
        </div>

        <div className='spotlight'>
          <h3>Spotlight On:</h3>
          <div className='below-spotlight'>
            <img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'/>
            <div className='chef-page-info'>
              <h4>Jennifer Thomas</h4>
              <img src=''></img>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis eget urna risus facilisis sit in fusce.
            </p>
            <Link to='/chefs/Jennifer Thomas'><button>View Full Profile</button></Link>
          </div>
        </div>

       {allChefs}
      </>
    )
  }
}
