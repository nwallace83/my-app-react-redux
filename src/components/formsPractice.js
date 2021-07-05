import React from 'react';
import { connect } from 'react-redux'
import AddPlayerForm from './addPlayerForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const mapStateToProps = (state) => {
    return {players: state.forms.players}
}

class FormsPractice extends React.Component {
    
    render (){
        return (
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Key</th>
                            <th scope="col">Name</th>
                            <th scope="col">Class</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.players.map((player,key) => {
                            return <PlayerRow player={player} index={key} key={key}/>
                        })}
                    </tbody>
                </table>

                <div className="row">
                    <div className="col-md-3 border-all"><AddPlayerForm /></div>
                </div>
            </div>
        )
    }
}

class PlayerRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.index}</td>
                <td>{this.props.player.name}</td>
                <td>{this.props.player.class}</td>
                <td><FontAwesomeIcon icon={faCoffee} /></td>
            </tr>
        )
    }
}

export default connect(mapStateToProps)(FormsPractice)