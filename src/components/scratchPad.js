import React from 'react'
import {toastr} from 'react-redux-toastr'

export class ScratchPad extends React.Component {
    render() {
        return(
            <div className="row margin-top-5">
                <button className="btn-primary" onClick={() => toastr.info("test","test")}>Toastr button</button>
            </div>
        )
    }
}