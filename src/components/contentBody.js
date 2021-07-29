import React from 'react'
import XKCD from './XKCD'
import Users from './admin/users'
import { connect } from 'react-redux'
import FormsPractice from './formsPractice'
import NewUserRegistration from './newUserRegistration'

const mapStateToProps = (state) => {
    return {activeTab: state.menu.activeTab}
}

class ContentBody extends React.Component {
    getTabBody() {
        switch (this.props.activeTab){
            case "xkcd": return <XKCD />
            case "forms": return <FormsPractice />
            case "register": return <NewUserRegistration />
            case "users": return <Users />
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