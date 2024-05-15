import 'std/dotenv/load';

export async function _fetch(
  url: URL | string,
  method = 'GET',
  payload?: Record<string, unknown>,
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
      ...(payload && { 'Content-Type': 'application/json' }),
    },
    ...(payload && { body: JSON.stringify(payload) }),
  })
    .then((response) => response.status !== 204 ? response.json() : true)
    .catch((error) => {
      console.log('error');
      console.error(error);
    });

  if (Deno.env.get('DEBUG')) {
    console.debug('debug', Deno.inspect(result));
  }

  return result;
}

export const instanceUrl = (): string => {
  let url = Deno.env.get('LINKDING_URL');
  if (!url) {
    throw new Error('Missing `LINKDING_URL` environment variable.');
  }

  if (!url.includes('/api')) {
    url = `${url}/api`;
  }

  return url;
};
