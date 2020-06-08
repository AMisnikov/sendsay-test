import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import beautify from 'js-beautify';
import { sendRequest } from '../../actions/historyActions';
import { updateFields } from '../../actions/consoleFormActions';
import { saveSettings } from '../../actions/viewSettingsActions';
import SvgIcon from '../SvgIcon/SvgIcon';
import Loader from '../Loader/Loader';

export const ConsoleForm = ({ formData, sendRequest, updateFields, saveSettings, fieldWidth }) => {
    const requestFieldBox = useRef(null);

    const [isFetching, setFetchingStatus] = useState(false);

    useEffect(() => {
        requestFieldBox.current.style.width = fieldWidth;
    }, []);

    const handleRequestInput = (e) => {

        const errors = [];

        try {
            const requestText = JSON.parse(e.target.value);
            if (!requestText.action) {
                errors.push('Запрос должен содержать параметр action');
            }
        } catch(e) {
            errors.push('Введите валидный JSON');
        }

        updateFields({
            requestText: e.target.value,
            errors,
            responseText: '',
            isSuccess: true,
            isRequestTextValid: errors.length > 0 ? false : true
        });
    };

    const formatRequest = () => {
        updateFields({
            requestText: beautify(formData.requestText)
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFetchingStatus(true);
        sendRequest(JSON.parse(e.target.elements.requestText.value)).then(() => {
            setFetchingStatus(false);
        });
    };

    const initResize = () => {
        window.addEventListener('mousemove', resize);
        window.addEventListener('mouseup', stopResize);
    };

    const resize = (e) => {
        const element = requestFieldBox.current;

        element.style.width = (e.clientX - element.offsetLeft) + 'px';
    };

    const stopResize = () => {
        const requestFieldWidth = requestFieldBox.current.style.width;
        saveSettings({ requestFieldWidth });
        window.removeEventListener('mousemove', resize);
        window.removeEventListener('mouseup', stopResize);
    };

    return (
        <form onSubmit={handleSubmit} className="console__form console-form">
            <div className="console-form__fields">
                <div 
                    ref={requestFieldBox}
                    className={ formData.errors.length > 0 ? "console-form__field console-form__field--request console-field console-field--invalid" : "console-form__field console-form__field--request  console-field" }>
                    <label htmlFor="req" className="console-field__label">
                        Запрос:
                    </label>
                    <textarea 
                        name="requestText" 
                        id="req" 
                        onChange={handleRequestInput}  
                        className="console-field__editor" 
                        value={formData.requestText}
                    ></textarea>
                </div>
                <div onMouseDown={initResize}  className="console-form__separator"> 
                    <span></span> 
                </div>
                <div className={ !formData.isSuccess > 0 ? "console-form__field console-form__field--response console-field console-field--invalid" : "console-form__field console-form__field--response  console-field" }>
                    <label htmlFor="res" className="console-field__label">
                        Ответ:
                    </label>
                    <textarea 
                        readOnly  
                        name="responseText" 
                        id="res"  
                        className="console-field__editor"
                        value={formData.responseText}
                    >
                    </textarea>
                </div>
            </div>
            { formData.errors.length > 0 && (
                <div className="console-form__errors">
                    { formData.errors.map((error, index) => <p key={index}>{error}</p>) }
                </div>
            ) }
            <div className="console-form__actions">
                <button 
                    className={ !formData.isRequestTextValid ? "btn-primary btn-primary--disabled" : "btn-primary" } 
                    type="submit"
                    disabled={ !formData.isRequestTextValid || isFetching ? true : false }  
                >
                    { isFetching ? <Loader size={20} /> : 'Отправить' }
                </button> 
                <a href="https://github.com/AMisnikov/sendsay-test" target="_blank"  className="link">@AMisnikov</a>
                <button onClick={formatRequest} type="button" className="btn-secondary">
                    <SvgIcon
                        className="btn-secondary__icon"
                        iconId="icon-format"
                        iconWidth={24}
                        iconHeight={24}
                    />
                    <span>Форматировать</span>
                </button>
            </div>
        </form>  
    );
};

const mapStateToProps = state => ({
    formData: state.consoleForm,
    fieldWidth: state.viewSettings.requestFieldWidth
});

const mapDispatchToProps = dispatch => ({
    sendRequest: (requestText) => dispatch(sendRequest(requestText)),
    updateFields: (updates) => dispatch(updateFields(updates)),
    saveSettings: (settings) => dispatch(saveSettings(settings))
});

export default connect(mapStateToProps, mapDispatchToProps)(ConsoleForm);
