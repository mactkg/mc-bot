export const sendGetCloudFunction = async (url: string, token: string) => {
  return fetch(url, {
    mode: "cors",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const sendPostCloudFunction = async (url: string, token: string) => {
  return fetch(url, {
    mode: "cors",
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
