import React from 'react';
import Comic from './comic';
import { connect } from 'react-redux'
import { addComics } from '../reducers/XKCDSlice';

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {dispatch}
}

class XKCD extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comic: []
        }
    }

    componentDidMount = () => {
         if (this.props.XKCD.comics.length < 1) {
            for (let index = 0; index < 10; index++) {
                fetch('/api' + Math.floor(Math.random() * 2481 + 1) + '/info.0.json')
                .then(res => res.json())
                .then(response => this.props.dispatch(addComics(response)))
            }
         }
    }

    getComics() {
            for (let index = 0; index < 10; index++) {
                fetch('/api' + Math.floor(Math.random() * 2481 + 1) + '/info.0.json')
                .then(res => res.json())
                .then(response => this.setState({comic: this.state.comic.concat(response)}))
            }
    }

    render() {
        return ( 
            <div id="comic-div" className="row bg-gradient-1">
                {this.props.XKCD.comics.map( (comic,index) => { return <Comic comic={comic} key={index} index={index} /> })} 
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(XKCD)
