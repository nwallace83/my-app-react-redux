import React from 'react'
import { connect } from 'react-redux'
import { addPlayer } from '../reducers/formsSplice'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const mapDispatchToProps = (dispatch) => {
    return {
        submitPlayer: (player) => {
            if (player.playerName < 1 || player.className < 1) {
                return null
            }
            dispatch(addPlayer(player))
        }
    }
}

const classes =[
    'Death Knight','Demon Hunter','Druid','Hunter','Mage','Monk','Paladin','Priest','Rogue','Shaman','Warlock','Warrior'
]

class AddPlayerForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            player: {
                playerName: '',
                playerClass: '',
            }
        }
    }

    setFormState(field,newValue) {
        this.setState({
            ...this.state,
            player:{...this.state.player,[field]: newValue}
        })
    }

    render() {
        return (
            <div className="border-solid padding-all-5"> 
                <Form>
                    <Form.Group controlId="ControlInput1">
                        <Form.Control type="txt" placeholder="Player Name" onChange={e => {this.setFormState('playerName',e.target.value)}}/>
                    </Form.Group>
                    <Form.Group controlId="ControlInput=2">
                        <Form.Control as="select" onChange={e => {this.setFormState('playerClass',e.target.value)}}>
                            <option>Select Class.....</option>
                            <option disabled>_______________________</option>
                            {classes.map( (className,index) => {
                                return (<option key={index}>{className}</option>)
                            })}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="ControlSubmit">
                        <Button variant="secondary" onClick={() => this.props.submitPlayer(this.state.player)}>Submit</Button>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

export default connect(null,mapDispatchToProps)(AddPlayerForm)