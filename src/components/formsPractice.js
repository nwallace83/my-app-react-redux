import React from 'react';
import { connect } from 'react-redux'
import AddPlayerForm from './addPlayerForm'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { deletePlayer } from '../reducers/formsSplice'
import { loadPlayers } from '../reducers/formsSplice';

const mapStateToProps = (state) => {
    return {players: state.forms.players}
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchLoadPlayers: (players) => {
            dispatch(loadPlayers(players))
        },
        dispatchDeletePlayer: (player) => {
            fetch('/api/players',{method: "DELETE", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(player)})
            .then(() => dispatch(deletePlayer(player)))
            .catch(err => console.log(err))
        }
    }
}

class FormsPractice extends React.Component {

    componentDidMount() {
        fetch('/api/players')
            .then(res => res.json())
            .then(res => {this.props.dispatchLoadPlayers(res)})
            .catch(err => console.log(err))
    }

    render (){
        return (
            <div>
                <div className="txt-center col-md-12">    
                    <h2>Fun with Forms</h2>
                    <hr />
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <AddPlayerForm />
                    </div>
                    <div className="col-lg-8">
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
                                    return <PlayerRow player={player} index={key} key={key} dispatchDeletePlayer={this.props.dispatchDeletePlayer}/>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

class PlayerRow extends React.Component {

    getClassColor(className) {
        switch (className) {
            case 'Death Knight': return 'player-class-dk'
            case 'Demon Hunter': return 'player-class-dh'
            case 'Druid': return 'player-class-druid'
            case 'Hunter': return 'player-class-hunter'
            case 'Mage': return 'player-class-mage'
            case 'Monk': return 'player-class-monk'
            case 'Paladin': return 'player-class-paladin'
            case 'Priest': return 'player-class-priest'
            case 'Rogue': return 'player-class-rogue'
            case 'Shaman': return 'player-class-shaman'
            case 'Warlock': return 'player-class-warlock'
            case 'Warrior': return 'player-class-warrior'
            default:
                return ''
        }
    }

    getDeleteIcon() {
        return this.props.player.protected ? 
            <span>-</span>
            :
            <FontAwesomeIcon icon={faTrashAlt} onClick={() => this.props.dispatchDeletePlayer(this.props.player)}/>
    }

    render() {
        return (
            <tr>
                <td>{this.props.index}</td>
                <td>{this.props.player.playerName}</td>
                <td className={this.getClassColor(this.props.player.playerClass)}>{this.props.player.playerClass}</td>
                <td>{this.getDeleteIcon()}</td>
            </tr>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FormsPractice)