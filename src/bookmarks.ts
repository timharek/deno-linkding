import { _fetch, instanceUrl } from './utils.ts';

export async function bookmarks(
  params: Linkding.IListParams,
): Promise<Linkding.IBookmark[]> {
  const url = new URL(`${instanceUrl}/bookmarks/`);
  if (params.query) {
    url.searchParams.set('q', params.query);
  }
  if (params.all) {
    const { count } = await _fetch(url, 'GET') as Linkding.IListResponse;
    url.searchParams.set('limit', count.toString());
  }
  if (params.limit) {
    url.searchParams.set('limit', params.limit.toString());
  }
  if (params.offset) {
    url.searchParams.set('offset', params.offset.toString());
  }

  const response = await _fetch(url, 'GET') as Linkding.IListResponse;

  return response.results;
}

export async function bookmark(id: number): Promise<Linkding.IBookmark> {
  const url = `${instanceUrl}/bookmarks/${id}`;

  const response = await _fetch(url, 'GET') as Linkding.IBookmark;

  return response;
}
