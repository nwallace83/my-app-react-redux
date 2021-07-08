import React from 'react';
import { connect } from 'react-redux'

class Comic extends React.Component {
    render () {
        return (
            <div className="border-solid txt-center round-corners margin-bottom-sm bg-white col-lg-6 col-md-12">
                    <h2 className="txt-center bg-light-grey round-corners margin-all-5">{this.props.comic.title}</h2>
                    <div className="padding-all"><img src={this.props.comic.img} alt="comic" /></div>
            </div>
        )
    }
}

export default connect()(Comic)