import React from 'react';
import { connect } from 'react-redux'
import AddPlayerForm from './addPlayerForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { deletePlayer } from '../reducers/formsSplice'

const mapStateToProps = (state) => {
    return {players: state.forms.players}
}

class FormsPractice extends React.Component {
    
    render (){
        return (
            <div className="row">
                <div className="txt-center"><h1>Fun with Forms</h1></div>
                 <AddPlayerForm />
                <table className="table table-striped table-bordered txt-center">
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
                            return <PlayerRow player={player} index={key} key={key} dispatch={this.props.dispatch}/>
                        })}
                    </tbody>
                </table>
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
                <td><FontAwesomeIcon icon={faTrashAlt} onClick={() => this.props.dispatch(deletePlayer(this.props.index))}/></td>
            </tr>
        )
    }
}

export default connect(mapStateToProps)(FormsPractice)