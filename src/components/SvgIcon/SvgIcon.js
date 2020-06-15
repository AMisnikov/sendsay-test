import React from 'react';

const SvgIcon = (props) => {
    const path = `/assets/img/icon-sprite.svg#${props.iconId ? props.iconId : ''}`;

    return (
        <svg className={props.className} style={{
            width: props.iconWidth,
            height: props.iconHeight
        }}>
            <use xlinkHref={path}></use>
        </svg>
    );
};

export default SvgIcon;