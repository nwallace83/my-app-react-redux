import React from 'react';
import { connect } from 'react-redux'
import { addPlayer } from '../reducers/formsSplice';

const mapDispatchToProps = (dispatch) => {
    return {
        submitPlayer: (event) => {
            const player = {
                name: event.target[0].value,
                class: event.target[1].value,
            }
            dispatch(addPlayer(player))
        }
    }
}

class AddPlayerForm extends React.Component {
    handlesubmit(event) {
        const player = {
            name: event.target[0].value,
            class: event.target[1].value,
        }
        console.log(this.props)

        // this.props.submitPlayer(player);
    }

    render() {
        return (
            <form className="form-group" onSubmit={this.props.submitPlayer}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="txt" className="form-control" placeholder="name" />
                </div>
                <div className="form-group">
                    <label>Class</label>
                    <input type="txt" className="form-control" placeholder="Class" />
                </div>
                <button type="submit" className="btn btn-primary margin-all-5">Add Player</button>
            </form>
        )
    }
}

export default connect(null,mapDispatchToProps)(AddPlayerForm)