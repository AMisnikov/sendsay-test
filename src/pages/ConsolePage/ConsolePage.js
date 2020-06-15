import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { selectScreenMode } from '../../selectors/viewSettings';
import Header from '../../components/Header/Header';
import Console from '../../components/Console/Console';

export const ConsolePage = ({ isFullScreen }) => (
    <div className="wrapper">
        <div className={isFullScreen ? "console-container console-container--fullscreen" : "console-container"}>
            <Header />
            <Console /> 
        </div>
    </div>
);


const mapStateToProps = state => ({
    isFullScreen: selectScreenMode(state)
});

export default connect(mapStateToProps)(ConsolePage);