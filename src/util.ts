export async function _fetch(url: URL, method = 'GET', token: string) {
  const result = await fetch(url, {
    method,
    headers: {
      Accept: 'application/json',
      Authorization: `Token ${token}`,
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log(error);
    });

  return result;
}
