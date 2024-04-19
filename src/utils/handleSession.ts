export const setSessionItem = (key: string, val: string) => {
  return window.sessionStorage.setItem(key, val);
};

export const getSessionItem = (key: string) => {
  return window.sessionStorage.getItem(key);
};
