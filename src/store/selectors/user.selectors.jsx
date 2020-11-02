import { createSelector } from 'reselect';

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector([selectUser], (user) => user.currentUser);

export const isLoading = createSelector([selectUser], (user) => user.isLoading);

export const Error = createSelector([selectUser], (user) => user.error);

export const Success = createSelector([selectUser], (user) => user.success);

export const Token = createSelector([selectUser], (user) => user.token);
