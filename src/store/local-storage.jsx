const STATE = 'ID';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(STATE);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};
export const loadSetState = (name) => {
  try {
    const serializedState = localStorage.getItem(name);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const setState = (name, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(name, serializedState);
  } catch (err) {
    console.log(err);
  }
};
export const saveState = (value) => {
  try {
    const serializedState = JSON.stringify(value);
    // const serializedState = value;
    localStorage.setItem(STATE, serializedState);
  } catch (err) {
    console.log(err);
  }
};

export const clearState = () => {
  try {
    localStorage.removeItem(STATE);
  } catch (err) {
    console.log(err);
  }
};
