import React from 'react';
import Comic from './comic';
import { connect } from 'react-redux'
import { addComics } from '../reducers/XKCDSlice';
import { deleteAllComics } from '../reducers/XKCDSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'

const mapStateToProps = (state) => {
    return {
        comics: state.XKCD.comics
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
            comic: []
        }
    }

    componentDidMount = () => {
        if (this.props.comics.length <= 0) {
            this.getComics()
        }
    }

    refreshComics = () => {
        this.props.dispatch(deleteAllComics())
        this.getComics()
    }

    getComics = () => {
        fetch('/api/xkcd')
            .then(res => res.json())
            .then(res => this.props.dispatch(addComics(res)))
    }

    render() {
        return ( 
            <div id="comic-div" className="row margin-top-5">
                <div className="margin-all-5 col-lg-12">
                    <button className="btn btn-dark" onClick={this.refreshComics}>
                        <FontAwesomeIcon icon={faSync} id="xkcd-refresh"/>Get New Comics
                    </button>
                </div>
                {this.props.comics.map( (comic,index) => { return <Comic comic={comic} key={index} index={index} /> })} 
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(XKCD)
