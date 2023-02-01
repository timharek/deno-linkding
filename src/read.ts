// @deno-types='../mod.d.ts'

import 'https://deno.land/std@0.175.0/dotenv/load.ts';
import { _fetch, getUrlAndToken } from './util.ts';

export async function listBookmarks(params: Linkding.IListParams) {
  const { url, token } = getUrlAndToken('bookmarks/');
  if (params.query) {
    url.searchParams.set('q', params.query);
  }
  if (params.all) {
    const { count }: Linkding.IListResponse = await _fetch(url, 'GET', token);
    url.searchParams.set('limit', count.toString());
  }
  if (params.limit) {
    url.searchParams.set('limit', params.limit.toString());
  }
  if (params.offset) {
    url.searchParams.set('offset', params.offset.toString());
  }

  const response: Linkding.IListResponse = await _fetch(url, 'GET', token);

  return response.results;
}

export async function getBookmark(id: number) {
  const { url, token } = getUrlAndToken(`bookmarks/${id}/`);

  const response: Linkding.IBookmark = await _fetch(url, 'GET', token);

  return response;
}

export async function listTags() {
  const { url, token } = getUrlAndToken('tags/');

  const response: Linkding.IListResponse = await _fetch(url, 'GET', token);

  return response;
}

export async function getTag(id: number) {
  const { url, token } = getUrlAndToken(`tags/${id}/`);

  const response: Linkding.ITag = await _fetch(url, 'GET', token);

  return response;
}
