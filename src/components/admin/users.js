import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'react-bootstrap'

class Users extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }

    fetchUsers() {
        fetch('/admin/users').then(res => res.json())
            .then(res => this.setState({users:res}))
    }

    componentDidMount() {
        this.fetchUsers()
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12 txt-center">
                    <h2>User Maintenance</h2>
                    <hr />
                </div>
                <div className="col-md-12">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.users.map((user,index) => {
                    return (
                            <tr key={index}>
                            <td>{user.userName}</td>
                            <td>{user.role}</td>
                            </tr>
                        )
                        })}
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}

export default connect()(Users)