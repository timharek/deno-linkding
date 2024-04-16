import { _fetch, getUrlAndToken } from './utils.ts';

export async function tags(): Promise<Linkding.ITag[]> {
  const { url, token } = getUrlAndToken('tags/');

  const response = await _fetch(url, 'GET', token) as Linkding.ITagsResponse;

  return response.results;
}

export async function tag(id: number): Promise<Linkding.ITag> {
  const { url, token } = getUrlAndToken(`tags/${id}/`);

  const response = await _fetch(url, 'GET', token) as Linkding.ITag;

  return response;
}
