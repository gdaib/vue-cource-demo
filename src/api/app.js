export const getAppName = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        code: 200,
        payload: {
          appName: Math.random().toString(16)
        }
      });
    }, 1000);
  });
