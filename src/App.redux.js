import React, { Component } from 'react';
import PropTypes from 'prop-types'

import {connect} from 'react-redux'
import * as actions from './actions'

import './App.css';

import {NameForm} from './components/NameForm'
import {FetchLib} from './stores/FetchLib'
import {UserCard} from './components/UserCard'

class App extends Component {

  static propTypes = {
    user: PropTypes.object
  }

  constructor(props){
    super(props)
  }

  handleChangeName(name){
    if(name.length > 2){
     this.props.changeName(name)
     this.props.fetchData(name)
    }
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps)
  }

  render() {
    const handleChangeName = this.handleChangeName.bind(this)
    const {user} = this.props

    return (
      <div className="App">
        <header className="App-header">
          <NameForm handleChangeName={handleChangeName}/>
        </header>
       
       {
         user?
          <UserCard user={user} />
          :null
       }
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {user, name} = state.state
  return{
    user, name
  }
}

const mapDispatchToProps = dispatch => ({
  fetchData(name){
    dispatch(actions.fetchData(name))
  },
  changeName(name){
    dispatch(actions.changeName(name))
  }
})

export default connect( mapStateToProps, mapDispatchToProps )(App)
