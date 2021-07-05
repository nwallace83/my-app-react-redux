import React from 'react';
import { connect } from 'react-redux'
import { deleteComic } from '../reducers/XKCDSlice';

class Comic extends React.Component {
    render () {
        return (
            <div className="border-solid txt-center round-corners margin-bottom-sm bg-white col-lg-6 col-md-12">
                    <div className="txt-right">
                        <button className="btn btn-danger margin-all-5" onClick={() => this.props.dispatch(deleteComic(this.props.index))}>Delete</button>
                    </div>
                    <h2 className="txt-center bg-light-grey round-corners">{this.props.comic.title}</h2>
                    <div className="padding-all"><img src={this.props.comic.img} alt="comic" /></div>
            </div>
        )
    }
}

export default connect()(Comic)