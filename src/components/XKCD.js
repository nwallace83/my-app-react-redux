import React from 'react';
import Comic from './comic';
import { connect } from 'react-redux'
import { addComics } from '../reducers/XKCDSlice';
import { deleteAllComics } from '../reducers/XKCDSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'

const mapStateToProps = (state) => {
    return {
        comics: state.XKCD.comics,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch,
    }
}

class XKCD extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
        }
    }

    componentDidMount = () => {
        if (this.props.comics.length <= 0) {
            this.setState({isLoading: true})
            this.getComics()
        }
    }

    refreshComics = () => {
        this.setState({isLoading: true})
        this.props.dispatch(deleteAllComics())
        this.getComics()
    }

    getComics = () => {
        fetch('/api/xkcd')
            .then(res => res.json())
            .then(res => this.props.dispatch(addComics(res)))
            .finally(res => this.setState({isLoading: false}))
    }

    render() {
        return (
            <div id="comic-div" className="container-fluid margin-top-5">
                <div>
                    <div className="margin-all-5 col-lg-12">
                        <RefreshButton onClick={this.refreshComics} isLoading={this.state.isLoading}/>
                    </div>
                    <div className="row">
                        {this.props.comics.map( (comic,index) => { return <Comic comic={comic} key={index} index={index} /> })}
                    </div>
                </div>
            </div>
        )
    }
}

class RefreshButton extends React.Component {
    render() {
        return (
            <button className="btn btn-dark" onClick={this.props.onClick}>
                <FontAwesomeIcon icon={faSync} id="xkcd-refresh" spin={this.props.isLoading}/>
                <span>Get New Comics</span>
            </button>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(XKCD)
