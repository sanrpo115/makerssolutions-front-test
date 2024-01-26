export const helpSendRequest = async (url: string, method: string, body: any) => {
  try {
    const headers = {'Content-Type': 'application/json'};
    const options = method === 'GET' ? { method: method, headers: headers } : { method: method, headers: headers, body: body }

    const response = await fetch(url, options);
    const responsedata = await response.json();
    return responsedata;
  } catch (error) {
    return error;
  }
};