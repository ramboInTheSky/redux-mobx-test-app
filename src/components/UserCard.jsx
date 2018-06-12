import * as React from 'react'
import PropTypes from 'prop-types'

export class UserCard extends React.Component {
    
    // eslint-disable-next-line
    constructor(props) {
        super(props)
    }
    

    render() {
        const { user } = this.props
        const style = {
            margin: '30px',
            padding: '5px',
            border: '1px solid grey'
        }
        return (
            <div>
                {
                    user && Object.keys(user).length > 0 ?
                        <div style={style}>
                            <label id="name"> name: </label> <div id="name">{user.login} </div>
                            <label id="bio"> bio: </label> <div id="bio">{user.bio} </div>
                            <label id="avatar_url"> avatar_url: </label> <div id="avatar_url">{user.avatar_url} </div>
                        </div>
                        : null
                }
            </div>
        )
    }
}

UserCard.propTypes = {
    user: PropTypes.object
}