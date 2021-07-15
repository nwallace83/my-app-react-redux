import React from 'react'
import XKCD from './XKCD'
import { connect } from 'react-redux'
import FormsPractice from './formsPractice'
import Auth from './auth'
import NewUserRegistration from './newUserRegistration'

const mapStateToProps = (state) => {
    return {activeTab: state.menu.activeTab}
}

class ContentBody extends React.Component {
    getTabBody() {
        switch (this.props.activeTab){
            case "xkcd": return <XKCD />
            case "forms": return <FormsPractice />
            case "auth": return <Auth />
            case "other": return "Not implemented"
            case "register": return <NewUserRegistration />
            default: return "ERROR!!!!!!!!!!!"
        }
    }

    render() {
        return (
            <div id="contentBody" className="container-fluid">
                {this.getTabBody()}
            </div>
        )
    }
}

 export default connect(mapStateToProps)(ContentBody)