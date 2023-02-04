import { getBookmark, listBookmarks } from './read.ts';
import { getMessage } from './cli_util.ts';

export async function _fetch(
  url: URL,
  method = 'GET',
  token: string,
): Promise<unknown> {
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

export function getUrlAndToken(path: string): { url: URL; token: string } {
  const url = new URL(`${Deno.env.get('LINKDING_URL')}/api/${path}`);
  const token = `${Deno.env.get('LINKDING_API')}`;

  return { url, token };
}

export async function getListOrBookmark(options: unknown, id?: number) {
  const response = id
    ? await getBookmark(id)
    : await listBookmarks(options as Linkding.IListParams);

  if ((options as IOptions).json) {
    return response;
  }
  if (Array.isArray(response)) {
    const resultArray = [];
    for (const item of response) {
      resultArray.push(getMessage<typeof item>(item));
    }
    return resultArray.join('\n');
  }

  return getMessage<typeof response>(response);
}
