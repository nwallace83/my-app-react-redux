import React from 'react'
import { connect } from 'react-redux'
import { Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

class Users extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            users:[],
            deleteUserDialogue: false,
            userToDelete: null,
        }
    }

    fetchUsers() {
        fetch('/admin/users').then(res => res.json())
            .then(res => this.setState({users:res}))
    }

    componentDidMount() {
        this.fetchUsers()
    }

    handleClose() {
        this.setState({deleteUserDialogue: false, userToDelete: null})
    }

    confirmDeleteUser(userName) {
        this.setState({deleteUserDialogue: true, userToDelete: userName})
    }

    deleteUser(userName) {
        fetch('/admin/users/'+userName, {method: "DELETE"})
        .then(() => {
            if (Response.ok) {
                this.setState({users: this.state.users.filter(user => {
                    return user.userName !== userName;
                })})
            }
            this.handleClose();
        }).catch(err => console.log(err))
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
                                <th className="txt-center">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.users.map((user,index) => {
                    return (
                            <tr key={index}>
                            <td>{user.userName}</td>
                            <td>{user.role}</td>
                            <td className="txt-center"><FontAwesomeIcon icon={faTrashAlt} onClick={() => this.confirmDeleteUser(user.userName)}/></td>
                            </tr>
                        )
                        })}
                        </tbody>
                    </Table>
                </div>
                <div>
                    {this.deleteUserConfirmation()}
                </div>
            </div>
        )
    }

    deleteUserConfirmation() {
        if (this.state.deleteUserDialogue) {
            return (
                <Dialog open={this.state.deleteUserDialogue} onClose={this.handleClose}>
                <DialogTitle>{"Are you sure you want to delete " + this.state.userToDelete + "?"}</DialogTitle>
                <DialogActions>
                <Button onClick={() => this.deleteUser(this.state.userToDelete)} color="primary">
                    YES
                </Button>
                <Button onClick={() => this.handleClose()} color="primary" autoFocus>
                    NO
                </Button>
                </DialogActions>
            </Dialog>
            )
        } else {
            return null;
        }
    }
}

export default connect()(Users)