import { _fetch, instanceUrl } from './utils.ts';

export async function tags(): Promise<Linkding.ITag[]> {
  const url = `${instanceUrl}/tags/`;

  const response = await _fetch(url, 'GET') as Linkding.ITagsResponse;

  return response.results;
}

export async function tag(id: number): Promise<Linkding.ITag> {
  const url = `${instanceUrl}/tags/${id}`;

  const response = await _fetch(url, 'GET') as Linkding.ITag;

  return response;
}
