import React from 'react';
import SvgIcon from '../SvgIcon/SvgIcon';

const FormAlert = ({title, text}) => (
    <div className="form-alert">
        <div className="form-alert__icon-box">
            <SvgIcon
                iconId="icon-fail"
                iconWidth={20}
                iconHeight={20}
             />
        </div>
        <div className="form-alert__content">
            <h5 className="form-alert__title">{title}</h5>
            <p className="form-alert__text">{text}</p>
        </div>
    </div>
);

export default FormAlert;