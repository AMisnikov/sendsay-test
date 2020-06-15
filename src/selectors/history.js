import { createSelector } from 'reselect';

const selectHistory = state => state.history;

export const getSortedRequests = (requests) => {
    const sortedRequests = requests.sort((a, b) => {
        return a.createdAt < b.createdAt ? 1 : -1;
    });
    
    return sortedRequests;
};

export const selectRequests = createSelector(
    [selectHistory],
    requests => getSortedRequests(requests)
);

