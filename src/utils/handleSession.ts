export const setSessionItem = (key: string, val: string) => {
  return window.sessionStorage.setItem(key, val);
};

export const getSessionItem = (key: string) => {
  return window.sessionStorage.getItem(key);
};

export const deleteSessionItem = (key: string) => {
  return new Promise((resolve, reject) => {
    try {
      window.sessionStorage.removeItem(key);
      resolve(true);
    } catch (e) {
      reject(e);
    }
  });
};
