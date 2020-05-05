import React, { Component } from 'react';


import InfoSectionRow from './RecordedClass';
import PlusIcon from '../../../../assets/images/plus';

class LastInfoSection extends Component {
    render = () => {
        return (
            
                <div className={"info-section-container"}>
                    <div className={"info-header"} style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <p style={{color:'black', fontWeight:'bold'}}>
                            AULAS GRAVADAS
                        </p>
                    </div>
                    <div className={"info-data"}>
                        <InfoSectionRow date={"03/05/2020"} descr={"Aula ao vivo: Sujeito composto simples"}></InfoSectionRow>
                        <InfoSectionRow date={"02/05/2020"} descr={"Aula ao vivo: Sujeito determinado"}></InfoSectionRow>
                        <InfoSectionRow date={"01/05/2020"} descr={"Aula ao vivo: Crase"}></InfoSectionRow>
                        <InfoSectionRow date={"30/04/2020"} descr={"Aula ao vivo: Técnica"}></InfoSectionRow>
                        <InfoSectionRow date={"29/04/2020"} borderBottom descr={"Aula ao vivo: Técnica"}></InfoSectionRow>
                                          </div>
                    <div className={"plus-icon"}>
                    <PlusIcon></PlusIcon>
                </div>
                </div>

        )
    }
}

export default LastInfoSection;