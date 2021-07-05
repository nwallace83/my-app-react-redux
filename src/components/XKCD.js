import React from 'react';
import Comic from './comic';
import { connect } from 'react-redux'
import { addComics } from '../reducers/XKCDSlice';
import { deleteAllComics } from '../reducers/XKCDSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'

const mapStateToProps = (state) => {
    return state
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
            comic: []
        }
    }

    componentDidMount = () => {
        this.getComics();
    }

    refreshComics = () => {
        this.props.dispatch(deleteAllComics())
        this.getComics()
    }

    getComics = () => {
        for (let index = 0; index < 10; index++) {
            fetch('/api/' + Math.floor(Math.random() * 2481 + 1) + '/info.0.json')
            .then(res => res.json())
            .then(response => this.props.dispatch(addComics(response)))
        }
    }

    render() {
        return ( 
            <div id="comic-div" className="row margin-top-5">
                <div className="margin-all-5">
                    <button className="btn btn-dark" onClick={this.refreshComics}>
                        <FontAwesomeIcon icon={faSync} id="xkcd-refresh"/>Get New Comics
                    </button>
                </div>
                {this.props.XKCD.comics.map( (comic,index) => { return <Comic comic={comic} key={index} index={index} /> })} 
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(XKCD)
