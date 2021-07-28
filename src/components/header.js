import React from 'react';
import { connect } from 'react-redux'
import { changeTab } from '../reducers/menuSlice';
import { setSession, clearSession } from '../reducers/sessionSlice';
import grumpyCat from '../images/cat-logo.png';
import {Form, Col, Row} from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Cookies from 'js-cookie'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const jwt = require('jsonwebtoken')

const mapStateToProps = (state) => {
    return {
        activeTab: state.menu.activeTab,
        session: state.session}
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeTab: (tabName) => dispatch(changeTab(tabName)),
        setSession: (session) => dispatch(setSession(session)),
        logout: () => {
            dispatch(clearSession())
            Cookies.remove("authorization")
        }
    }
}

class Header extends React.Component {
    setNewTab(newTab) {
        this.setState({currentTab: newTab})
    }

    getButtonClasses(tabName) {
        return "nav-tab " + (this.props.activeTab === tabName ? "tab-active" : "tab-inactive")
    }

    setSessionFromCookie() {
        const authCookie = Cookies.get("authorization")
        if (authCookie) {
            const decodedWebToken = jwt.decode(authCookie)
            this.props.setSession({userName: decodedWebToken.userName, sessionToken: Cookies.get("authorization"), role: decodedWebToken.role})
        }
    }

    componentDidMount() {
        this.setSessionFromCookie()
    }

    getAdminTabs() {
        if (this.props.session && this.props.session.role === "ADMIN") {
            return <li className="nav-item"><a className={this.getButtonClasses("users")} href="#" onClick={() => this.props.changeTab("users")}>Users</a></li>
        } else {
            return null
        }
    }

    render() {
        return (
            <div className="row bg-gradient-1">
                <div className="col-lg-4">
                    <ul className="nav">
                        <li><img alt="grumpy-cat" className="logo" src={grumpyCat} /></li>
                        <li className="nav-item"><a className={this.getButtonClasses("xkcd")} href="#" onClick={() => this.props.changeTab("xkcd")}>XKCD</a></li>
                        <li className="nav-item"><a className={this.getButtonClasses("forms")} href="#" onClick={() => this.props.changeTab("forms")}>Forms</a></li>
                        <li className="nav-item"><a className={this.getButtonClasses("other")} href="#" onClick={() => this.props.changeTab("other")}>Auth</a></li>
                        {this.getAdminTabs()}
                    </ul>
                </div>
                <div className="offset-lg-3 col-lg-5" style={{paddingTop: "2px"}}>
                    {this.props.session.sessionToken ? 
                        <UserDetails session={this.props.session} logout={this.props.logout}/> : 
                        <LoginForm setSession={this.props.setSession} changeTab={this.props.changeTab}/>}
                </div>
            </div>
        )
    }
}

class UserDetails extends React.Component {
    render() {
        return(
            <Row id="user-details">
                <Col lg={7} />
                <Col lg={5} className="txt-right">
                    {this.props.session.userName}<FontAwesomeIcon style={{paddingLeft: "5px"}} icon={faUser} />
                    <Button size="sm" id="logout-button" variant="secondary" onClick={this.props.logout}>Logout</Button>
                </Col>
            </Row>
        )
    }
}

class LoginForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            userName:'',
            password:''
        }
    }

    setFormState(field,newValue) {
        this.setState({...this.state,[field]: newValue})
    }

    submitLogin(payload) {
        fetch('/auth/login',{method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload)})
            .then(res => res.json())
            .then(res => this.props.setSession(res))
    }

    render() {
        return (
            <Form id="login-form">
                <Form.Row as={Row}>
                    <Col lg={4}>
                        <Form.Control size="sm" type="txt" placeholder="username" onChange={(e) => this.setFormState('userName',e.target.value)}/>
                    </Col>
                    <Col lg={4}>
                        <Form.Control size="sm" type="password" placeholder="password" onChange={(e) => this.setFormState('password',e.target.value)}/>
                    </Col>
                    <Col lg={2}>
                        <Button size="sm" type="submit" id="login-button" type="submit" variant="secondary" onClick={() => this.submitLogin(this.state)}>Login</Button>
                    </Col>
                    <Col lg={2}>
                        <Button size="sm" id="register-button" type="submit" variant="secondary" onClick={() => this.props.changeTab("register")}>Register</Button>
                    </Col>
                </Form.Row>
             </Form>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)
