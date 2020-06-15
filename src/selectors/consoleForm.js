import { createSelector } from 'reselect';

const selectConsoleForm = state => state.consoleForm;

export const selectFormData = createSelector(
    [selectConsoleForm],
    formData => formData
);