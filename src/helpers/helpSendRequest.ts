export const helpSendRequest = async (url: string, method: string, body: any) => {
  try {
    const headers = {'Content-Type': 'application/json'};
    const options = method === 'GET' ? { method: method, headers: headers } : { method: method, headers: headers, body: body }

    const response = await fetch(url, options);
    return response.json();
  } catch (error) {
    return error;
  }
};