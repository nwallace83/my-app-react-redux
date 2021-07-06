import React from 'react'
import { connect } from 'react-redux'
import { addPlayer } from '../reducers/formsSplice'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const mapDispatchToProps = (dispatch) => {
    return {
        submitPlayer: (player) => {
            if (player.playerName < 1 || player.playerClass < 1 || player.playerClass == 'Select Class.....') {
                return null
            }
            dispatch(addPlayer(player))
            document.getElementById("add-user-form").reset()
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

    activateSubmitButton() {
        return (this.state.player.playerName &&
             this.state.player.playerClass &&
              this.state.player.playerClass != 'Select Class.....') ? 'btn-success' : 'disabled'
    }

    onSubmit() {
        this.setState({player: {playerName:'',playerClass:''}})
    }

    render() {
        return (
            <div className="border-solid padding-all-5"> 
                <div className='txt-center'>
                    <h5>Add Player</h5>
                </div>
                <Form id="add-user-form" onSubmit={() => this.onSubmit()}>
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
                        <Button type= "submit" variant="secondary" 
                        onClick={() => this.props.submitPlayer(this.state.player)}
                        className={this.activateSubmitButton()}>Submit</Button>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

export default connect(null,mapDispatchToProps)(AddPlayerForm)