import * as React from 'react'
import PropTypes from 'prop-types'

export class NameForm extends React.PureComponent {
    
    _handleChangeName(e) {
        const {handleChangeName} = this.props
        const name = e.target.value
        if(handleChangeName){
            handleChangeName(name)
        }
    }

    render() {
        const _handleChangeName = this._handleChangeName.bind(this)
        return (
            <div>
                <h2> Type a name to fetch a git user </h2>
                <input type="text" onChange={_handleChangeName} />
            </div>
        )
    }
}



NameForm.propTypes = {
    handleChangeName: PropTypes.func.isRequired
}