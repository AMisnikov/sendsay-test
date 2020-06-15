import { createSelector } from 'reselect';

const selectViewSettings = state => state.viewSettings;

export const selectScreenMode = createSelector(
    [selectViewSettings],
    settings => settings.isFullScreen
);

export const selectFieldWidth = createSelector(
    [selectViewSettings],
    settings => settings.requestFieldWidth
);