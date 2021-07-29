import React from 'react';
import { Form, Button }from 'react-bootstrap'
import { connect } from 'react-redux'
import { setSession } from '../reducers/sessionSlice'
import { changeTab } from '../reducers/menuSlice'

const mapDispatchToProps = (dispatch) => {
    return {
        setSession: (session) => dispatch(setSession(session)),
        changeTab: (tabName) => dispatch(changeTab(tabName)),        
    }
}

class NewUserRegistration extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newUser: {
                userName:"",
                password:"",
                confirmPassword:"",
                role:""
            }
        }
    }

    setFormState(field,newValue) {
        this.setState({...this.state,
                            newUser:{...this.state.newUser,[field]: newValue}})
    }

    formIsValid() {
        if (this.state.newUser.userName.length > 4 &&
                this.state.newUser.password.length > 7 &&
                    this.state.newUser.confirmPassword === this.state.newUser.password &&
                        (this.state.newUser.role === "ADMIN" || this.state.newUser.role === "USER")) {
                            return true
                        }
                        return false
    }

    passwordsMatch() {
        return (this.state.newUser.confirmPassword === this.state.newUser.password &&
                    this.state.newUser.password.length > 0)
    }

    passwordsDontMatch() {
        return (this.state.newUser.confirmPassword !== this.state.newUser.password &&
            this.state.newUser.password.length > 0)
    }

    userNameIsValid() {
        return this.state.newUser.userName.length > 4
    }

    submitNewUser(newUser) {
        let payload = {
                    userName: newUser.userName, 
                    password: newUser.password,
                    role: newUser.role
                }
        fetch('/auth/register',{method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload)})
            .then(res => res.json())
            .then(res => this.props.setSession(res))
            .then(() => this.props.changeTab("xkcd"))
    }

    render() {
        return (
            <div className="row">
                <div className="col-lg-12 txt-center">
                    <h1>New User Registration</h1>
                    <hr />
                </div>
                <div className="offset-lg-3 col-lg-6 border-solid round-corners" style={{paddingTop:"15px",paddingBottom:"15px"}}>
                    <Form>
                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <Form.Control isValid={this.userNameIsValid()} isInvalid={!this.userNameIsValid()} type="txt" placeholder="enter username" onChange={(e) => this.setFormState('userName',e.target.value)}/>
                            <Form.Control.Feedback type="invalid">Username must be greater than 4 characters</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="enter password" onChange={(e) => this.setFormState('password',e.target.value)}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control isValid={this.passwordsMatch()}
                                            isInvalid={this.passwordsDontMatch()}
                                                type="password" 
                                                    placeholder="confirm password" 
                                                        onChange={(e) => this.setFormState('confirmPassword',e.target.value)}/>
                              <Form.Control.Feedback type="invalid">Passwords Don't Match</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Select a Role</Form.Label>
                            <Form.Control as="select" onChange={e => {this.setFormState('role',e.target.value)}}>
                                <option>Select Role.....</option>
                                <option disabled>_______________________</option>
                                {["USER","ADMIN"].map( (role, index) => {return (<option key={index}>{role}</option>)})}
                            </Form.Control>
                         </Form.Group>
                         <Form.Group>
                            <Button variant={this.formIsValid() ? "primary" : "secondary"} 
                                        disabled={!this.formIsValid()}
                                            onClick={() => this.submitNewUser(this.state.newUser)}>
                                Submit
                            </Button>
                         </Form.Group>
                    </Form>
                </div>
            </div>

        )
    }
}

export default connect(null,mapDispatchToProps)(NewUserRegistration)