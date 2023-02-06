import { getBookmark, getTag, listBookmarks, listTags } from './read.ts';
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

export async function getListOrBookmark(
  options: unknown,
  id?: number,
): Promise<string> {
  const response = id
    ? await getBookmark(id)
    : await listBookmarks(options as Linkding.IListParams);

  return getMessageHelper(response, (options as IOptions).json);
}

export async function getTagsOrTag(
  options: unknown,
  id?: number,
): Promise<string> {
  const response = id ? await getTag(id) : await listTags();

  return getMessageHelper(response, (options as IOptions).json);
}

function getMessageHelper<
  T extends
    | Linkding.IBookmark
    | Linkding.ITag
    | Linkding.IBookmark[]
    | Linkding.ITag[],
>(
  input: T,
  jsonOutput: boolean,
): string {
  if (jsonOutput) {
    return JSON.stringify(input, null, 2);
  }
  if (Array.isArray(input)) {
    const resultArray = [];
    for (const item of input) {
      resultArray.push(getMessage<typeof item>(item));
    }
    return resultArray.join('\n');
  }

  return getMessage<typeof input>(input);
}
