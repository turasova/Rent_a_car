export const isAuthSelector = (state) => state.auth.isLoggedIn
export const userSelector = (state) => state.auth.user
export const errorSelector = (state)=> state.auth.error
export const currentUserSelector = (state) => state.auth.isCurrentUser;