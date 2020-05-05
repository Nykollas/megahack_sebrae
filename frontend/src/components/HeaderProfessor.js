import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

import EvalIcon from '../assets/images/header_icon/eval';
import ForumIcon from '../assets/images/header_icon/forum';
import GroupsIcon from '../assets/images/header_icon/groups';
import HelpIcon from '../assets/images/header_icon/help';
import InboxIcon from '../assets/images/header_icon/inbox';
import PanelIcon from '../assets/images/header_icon/panel';
import LogoIcon from '../assets/images/header_icon/logoprofessor';
import { PushNotification } from 'twilio-chat';




class Header extends Component {

    openDrawer = () => {
        const { openDrawer } = this.props;
        if (window.location.pathname == "/login") {

            return;
        }
        openDrawer(true);
    }


    hasDrawer = () => {
        const { drawer } = this.props;
        if (drawer) {
            return drawer;
        } else {
            return false;
        }
    }

    render = () => {
        const { icon, title } = this.props;
        return (<div className={'header'} style={{backgroundColor:'#5A6288'}}>
            <div onClick={this.hasDrawer() ? this.openDrawer : () => { }} className={"header-icon-container"}>
                <LogoIcon></LogoIcon>
            </div>
            <div className={"header-title"}>
                <div className={'navigation-icons'}>
                    <div className={"navigation-option"}>
                        <PanelIcon></PanelIcon>
                        <p className={"navigation-option-label"}>Painel</p>
                    </div>
                    <div className={"navigation-option"}>
                        <GroupsIcon></GroupsIcon>
                        <p className={"navigation-option-label"}>Grupos</p>
                    </div>

                    <div className={"navigation-option"}>
                        <EvalIcon></EvalIcon>
                        <p className={"navigation-option-label"}>Avaliações</p>
                    </div>

                    <div className={"navigation-option"}>
                        <ForumIcon></ForumIcon>
                        <p className={"navigation-option-label"}>Fórum</p>
                    </div>

                    <div className={"navigation-option"}>
                        <InboxIcon></InboxIcon>
                        <p className={"navigation-option-label"}>Caixa de Entrada</p>
                    </div>

                    <div className={"navigation-option"}>
                        <HelpIcon></HelpIcon>
                        <p className={"navigation-option-label"}>Ajuda</p>
                    </div>
                </div>
                <div className={"header-data"}>
                    <p>
                        28 °C - 16:30
                    </p>
                    <p>
                        02, maio de 2020    
                    </p>
                    <p>
                        Sair
                    </p>                        
                </div>
            </div>
        </div>)
    }
}


const mapDispatchToProps = actions;
const mapStateToProps = (state) => ({
    drawer_open: state.drawer_open
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);