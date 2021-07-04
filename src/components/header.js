import React from 'react';
import { connect } from 'react-redux'
import { changeTab } from '../reducers/menuSlice';
import grumpyCat from '../images/cat-logo.png';

const mapStateToProps = (state) => {
    return state.menu
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeTab: (tabName) => dispatch(changeTab(tabName))
    }
}

class Header extends React.Component {
    setNewTab(newTab) {
        this.setState({currentTab: newTab})
    }

    getButtonClasses(tabName) {
        return "nav-link nav-tab " + (this.props.activeTab === tabName ? "tab-active" : "tab-inactive")
    }

    render() {
        return (
            <div className="row bg-gradient-1">
                <ul className="nav">
                    <li><img alt="grumpy-cat" className="logo" src={grumpyCat} /></li>
                    <li><a className={this.getButtonClasses("xkcd")} href="#" onClick={() => this.props.changeTab("xkcd")}>XKCD</a></li>
                    <li><a className={this.getButtonClasses("other")} href="#" onClick={() => this.props.changeTab("other")}>Other</a></li>
                </ul>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)
