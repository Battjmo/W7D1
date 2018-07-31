const thunk = ({dispatch, getState}) => nextMiddleware => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }
  return nextMiddleware(action);
};

export default thunk;
