import React, { Component } from 'react';


import NotificationIcon from '../../../../assets/images/notification';
import InfoSectionRow from './InforSectionRow';
import PlusIcon from '../../../../assets/images/plus';

class LastInfoSection extends Component {
    render = () => {
        return (
            
                <div className={"info-section-container"}>
                    <div className={"info-header"}>
                        <NotificationIcon></NotificationIcon>
                        <p>
                            ÚLTIMAS INFORMAÇÕES
                        </p>
                    </div>
                    <div className={"info-data"}>
                        <InfoSectionRow></InfoSectionRow>
                        <InfoSectionRow></InfoSectionRow>
                        <InfoSectionRow></InfoSectionRow>
                        <InfoSectionRow></InfoSectionRow>
                        <InfoSectionRow borderBottom></InfoSectionRow>

                    </div>
                    <div className={"plus-icon"}>
                    <PlusIcon></PlusIcon>
                </div>
                </div>

        )
    }
}

export default LastInfoSection;