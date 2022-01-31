export async function client(url, customConfig) {
  const config = {
    method: "GET",
    ...customConfig
  };
  const response = await window.fetch(url, config);
  const data = await response.json();
  if (response.ok) {
    return data;
  } else {
    return Promise.reject(data);
  }
}
