// @deno-types='../mod.d.ts'

import 'https://deno.land/std@0.175.0/dotenv/load.ts';
import { _fetch, getUrlAndToken } from './util.ts';

export async function listBookmarks(
  params: Linkding.IListParams,
): Promise<Linkding.IBookmark[]> {
  const { url, token } = getUrlAndToken('bookmarks/');
  if (params.query) {
    url.searchParams.set('q', params.query);
  }
  if (params.all) {
    const { count } = await _fetch(url, 'GET', token) as Linkding.IListResponse;
    url.searchParams.set('limit', count.toString());
  }
  if (params.limit) {
    url.searchParams.set('limit', params.limit.toString());
  }
  if (params.offset) {
    url.searchParams.set('offset', params.offset.toString());
  }

  const response = await _fetch(url, 'GET', token) as Linkding.IListResponse;

  return response.results;
}

export async function getBookmark(id: number): Promise<Linkding.IBookmark> {
  const { url, token } = getUrlAndToken(`bookmarks/${id}/`);

  const response = await _fetch(url, 'GET', token) as Linkding.IBookmark;

  return response;
}

export async function listTags(): Promise<Linkding.ITag[]> {
  const { url, token } = getUrlAndToken('tags/');

  const response = await _fetch(url, 'GET', token) as Linkding.ITagsResponse;

  return response.results;
}

export async function getTag(id: number): Promise<Linkding.ITag> {
  const { url, token } = getUrlAndToken(`tags/${id}/`);

  const response = await _fetch(url, 'GET', token) as Linkding.ITag;

  return response;
}
