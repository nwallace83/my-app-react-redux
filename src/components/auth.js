import React from 'react';
import { connect } from 'react-redux'

class Auth extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            userName: '',
            password: '',
            message: '',
        }
    }

    setFormState = (field,newValue) => {
        this.setState({
            ...this.state,[field]: newValue
        })
    }
    
    submitLogin = (loginDetails) => {
        fetch('/auth',{method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(loginDetails)})
    }

    fetchLogin = () => {
        fetch('/auth')
            .then(res => res.json())
            .then(res => JSON.stringify(res))
            .then(res => this.setState({message: res}))
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="username" onChange={(e) => this.setFormState("userName",e.target.value)}/><br />
                <input type="password" placeholder="password" onChange={(e) => this.setFormState("password",e.target.value)}/><br />
                <button className="btn btn-success" onClick={() => this.submitLogin(this.state)}>Submit</button>
                <hr />
                <button className="btn btn-success" onClick={this.fetchLogin}>auth.get</button>
                <p>{this.state.message}</p>
            </div>
        )
    }

}

export default connect()(Auth)