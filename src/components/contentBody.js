import React from 'react'
import XKCD from './XKCD'
import { connect } from 'react-redux'
import FormsPractice from './formsPractice'

const mapStateToProps = (state) => {
    return {activeTab: state.menu.activeTab}
}

class ContentBody extends React.Component {
    getTabBody() {
        switch (this.props.activeTab){
            case "xkcd": return <XKCD />
            case "forms": return <FormsPractice />
            case "other": return "Not implemented"
            default: return "ERROR!!!!!!!!!!!"
        }

        //return this.props.activeTab === "xkcd" ? <XKCD /> : "I love you for clicking on this but there's nothing here"
    }

    render() {
        return (
            <div className="round-corners">
                {this.getTabBody()}
            </div>
        )
    }
}

 export default connect(mapStateToProps)(ContentBody)