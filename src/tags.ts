import { Tag, TagsResponse } from './schemas.ts';
import { _fetch, instanceUrl } from './utils.ts';

type TagsOptions = {
  limit?: number;
  offset?: number;
};

/**
 * List tags.
 *
 * @returns Tags with pagination results
 */
export async function tags(options?: TagsOptions): Promise<TagsResponse> {
  const url = new URL(`${instanceUrl()}/tags/`);
  if (options) {
    url.searchParams.set('limit', String(options.limit) ?? '');
    url.searchParams.set('offset', String(options.offset) ?? '');
  }

  const response = await _fetch(url, 'GET');
  const result = TagsResponse.parse(response);

  return result;
}

/**
 * Single tag by ID.
 *
 * @returns Tag
 */
export async function tag(id: number): Promise<Tag> {
  const url = `${instanceUrl()}/tags/${id}`;

  const response = await _fetch(url, 'GET');
  const result = Tag.parse(response);

  return result;
}

type TagPayload = {
  name: string;
};

/**
 * Add new tag with payload.
 *
 * @returns Newly added tag
 */
export async function addTag(payload: TagPayload): Promise<Tag> {
  const url = `${instanceUrl()}/tags/`;

  const response = await _fetch(url, 'POST', payload);
  const result = Tag.parse(response);

  return result;
}
