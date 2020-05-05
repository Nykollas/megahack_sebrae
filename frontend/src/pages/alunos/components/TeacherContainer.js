import React, { Component } from 'react';

import LiveIcon from '../../../assets/images/live';

import AccessIcon from '../../../assets/images/enter_room';
class TeacherContainer extends Component {
    render = () => {
        const { subject, start, end, teacher, onClick } = this.props;
        return (
            <div onClick={onClick}  style={{cursor:'pointer'}} className={"teacher-container"}>
                <div className={"teacher-info"}>
                    <div className={"teacher-name"}>
                        <p>{teacher}</p>
                    </div>
                    <div className={"teacher-live"}>
                        <LiveIcon></LiveIcon>
                    </div>
                    <div className={"teacher-text"}>
                        <p>{subject}</p>
                        <p>{start} - {end}</p>
                    </div>
                </div>
                <div className={"access-icon"}>
                    <AccessIcon></AccessIcon>
                </div>
            </div>
        )
    }
}

export default TeacherContainer;