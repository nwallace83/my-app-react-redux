import React from 'react';
import { connect } from 'react-redux'
import { addPlayer } from '../reducers/formsSplice';

const mapDispatchToProps = (dispatch) => {
    return {
        submitPlayer: (event) => {
            if (!event.target[0].value || !event.target[1].value) {
                return null
            }

            const player = {
                name: event.target[0].value,
                class: event.target[1].value,
            }
            dispatch(addPlayer(player))
        }
    }
}

class AddPlayerForm extends React.Component {

    render() {
        return (
            <div class="row col-lg-6 border-solid margin-all-5 txt-center"> 
                <form className="form-group" onSubmit={this.props.submitPlayer}>
                    <div className="input-group">
                        <div className="col-md-5 padding-all-5">
                            <input type="txt" className="form-control" placeholder="Name" maxlength="50"/>
                        </div>
                        <div className="col-md-5 padding-all-5">
                            <input type="txt" className="form-control" placeholder="Class" />
                        </div>
                        <div className="col-md-2 padding-all-5">
                            <button type="submit" className="btn btn-primary">Add Player</button>
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}

export default connect(null,mapDispatchToProps)(AddPlayerForm)