export async function _fetch(
  url: URL | string,
  method = 'GET',
): Promise<unknown> {
  const token = Deno.env.get('LINKDING_API');
  if (!token) {
    throw new Error('Missing `LINKDING_API` environment variable.');
  }
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

export const instanceUrl = (): string => {
  const url = Deno.env.get('LINKDING_URL');
  if (!url) {
    throw new Error('Missing `LINKDING_URL` environment variable.');
  }

  return url;
};
