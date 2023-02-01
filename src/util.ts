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

export function getUrlAndToken(path: string) {
  const url = new URL(`${Deno.env.get('LINKDING_URL')}/api/${path}`);
  const token = `${Deno.env.get('LINKDING_API')}`;

  return { url, token };
}
