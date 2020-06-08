import React, { useRef } from 'react';
import { connect } from 'react-redux';
import Request from '../Request/Request';
import getSortedRequests from '../../selectors/requests';
import { startClearHistory } from '../../actions/historyActions';

export const History = ({ history, clearHistory }) => {

    const historyList = useRef(null);

    const handleMouseEnter = () => {
        window.addEventListener('wheel', wheelListener);
    };

    const handleMouseLeave = () => {
        window.removeEventListener('wheel', wheelListener);
    };

    const wheelListener = (e) => {
        const currentPos = historyList.current.scrollLeft;
        
        if (e.deltaY > 0){
            historyList.current.scrollLeft = currentPos + 100;
        } else {
            historyList.current.scrollLeft = currentPos - 100;
        };
    };

    const handleScroll = (e) => {

        const openedDropdown = e.target.querySelector('.request__dropdown--open');

        if(openedDropdown) {
            const parentHistoryItem = openedDropdown.parentNode.parentNode.parentNode;
            const dropdownWidth = openedDropdown.offsetWidth;
            
            const dropdownPosition = parentHistoryItem.offsetLeft - e.target.scrollLeft + (parentHistoryItem.offsetWidth - dropdownWidth);

            openedDropdown.style.left = dropdownPosition  + 'px';

            const isOverflow = dropdownPosition < 0 || dropdownPosition > (e.target.offsetWidth - openedDropdown.offsetWidth + 10);

            if(isOverflow) {
                openedDropdown.style.opacity = 0;
                openedDropdown.style.visibility = 'hidden';
            } else {
                openedDropdown.style.opacity = 1;
                openedDropdown.style.visibility = 'visible';
            }

        }
    };

    
    return (
        <div className="history">
            { history.length > 0 ? (
                <>
                    <ul 
                        className="history__list" 
                        ref={historyList} 
                        onScroll={handleScroll} 
                        onMouseEnter={handleMouseEnter} 
                        onMouseLeave={handleMouseLeave}
                    >
                        { history.map(request => (
                            <li key={request.id} className="history__item">
                                <Request request={request} />
                            </li>
                        )) }
                    </ul>
                    <div className="history__btn-delete-box">
                        <button onClick={clearHistory} className="btn-delete"></button>
                    </div>
                </>
            ) : (
                <p className="history__empty-message" >История запросов пуста. Добавьте запрос, используя форму ниже</p>
            ) }   
        </div>
    );
};

const mapStateToProps = state => ({
    history: getSortedRequests(state.history)

});

const mapDispatchToProps = dispatch => ({
    clearHistory: () => dispatch(startClearHistory())
});

export default connect(mapStateToProps, mapDispatchToProps)(History);

