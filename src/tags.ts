import { Tag, TagsResponse } from './schemas.ts';
import { _fetch, instanceUrl } from './utils.ts';

export async function tags(): Promise<TagsResponse> {
  const url = `${instanceUrl()}/tags/`;

  const response = await _fetch(url, 'GET');
  const result = TagsResponse.parse(response);

  return result;
}

export async function tag(id: number): Promise<Tag> {
  const url = `${instanceUrl()}/tags/${id}`;

  const response = await _fetch(url, 'GET');
  const result = Tag.parse(response);

  return result;
}
