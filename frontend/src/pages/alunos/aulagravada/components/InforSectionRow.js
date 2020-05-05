import React, { Component } from 'react';

import Eye from '../../../../assets/images/eye';

class InfoSectionRow extends Component {
    render = () => {
        const { borderBottom } = this.props;
        return (
            <div className={"info-data-row"} style={borderBottom ? { border:"1px solid gray"} : {}}>
                <div className={"info-data-date"}>
                    <p>
                        29/05/2020
                    </p>
                </div>
                <div className={"info-data-text"}>
                    <p>
                        Aula  ao vivo de Língua Portuguesa
                    </p>
                </div>
                <div className={"info-data-teacher"}>
                    <p>
                        Prof. Marieta Dias
                    </p>
                </div>
                <div className={"info-data-icon"}>
                    <Eye></Eye>
                </div>
            </div>
        )
    }
}

export default InfoSectionRow;