import React, { Component } from 'react';

import {observer} from 'mobx-react'
import * as mobx from 'mobx'

import './App.css';

//components
import {NameForm} from './components/NameForm'
import {UserCard} from './components/UserCard'

import {mobxStore, getData, invalidateForm} from './stores/MobxStore'

export default observer(
  class App extends Component {

    componentWillReact(){
      console.log('reacting', mobx.toJS(mobxStore) )
    }

    handleChangeName(name){
      if(name.length > 2){
        getData(name)
      }
      else{
        invalidateForm(name)
      }
    }

    componentWillReceiveProps(nextProps){
      console.log(nextProps)
    }

    render() {
      const handleChangeName = this.handleChangeName.bind(this)
      const {user} = mobxStore
      // mobx.trace(true)

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
)

