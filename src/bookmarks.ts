import { Bookmark, BookmarksResponse } from './schemas.ts';
import { _fetch, instanceUrl } from './utils.ts';

type BookmarksOptions = {
  query?: string;
  limit?: number;
  offset?: number;
};
export async function bookmarks(
  options?: BookmarksOptions,
): Promise<BookmarksResponse> {
  const url = new URL(`${instanceUrl()}/bookmarks/`);
  if (options) {
    url.searchParams.set('q', options.query ?? '');
    url.searchParams.set('limit', String(options.limit) ?? '');
    url.searchParams.set('offset', String(options.offset) ?? '');
  }

  const response = await _fetch(url, 'GET');
  const result = BookmarksResponse.parse(response);

  return result;
}

export async function bookmark(id: number): Promise<Bookmark> {
  const url = `${instanceUrl()}/bookmarks/${id}`;

  const response = await _fetch(url, 'GET');
  const result = Bookmark.parse(response);

  return result;
}

type BookmarkPayload = {
  url: string;
  title: string;
  description?: string;
  notes?: string;
  is_archived?: boolean;
  unread?: boolean;
  shared?: boolean;
  tag_names?: string[];
};
export async function addBookmark(payload: BookmarkPayload): Promise<Bookmark> {
  const url = `${instanceUrl()}/bookmarks/`;

  const response = await _fetch(url, 'POST', payload);
  const result = Bookmark.parse(response);

  return result;
}

export async function bookmarkByUrl(url: string): Promise<Bookmark | null> {
  const searchResult = await bookmarks({ query: url });

  const result = searchResult.results.find((item) => item.url.includes(url));
  if (!result) {
    return null;
  }

  return result;
}

export async function deleteBookmark(id: number): Promise<boolean> {
  const url = `${instanceUrl()}/bookmarks/${id}`;

  const result = await _fetch(url, 'DELETE');

  return !!result;
}

export async function deleteBookmarkByUrl(url: string): Promise<boolean> {
  const searchResult = await bookmarks({ query: url });

  const item = searchResult.results.find((item) => item.url.includes(url));
  if (!item) {
    return false;
  }

  return await deleteBookmark(item.id);
}

type BookmarkUpdatePayload = Omit<BookmarkPayload, 'url'> & {
  url?: string;
};

export async function updateBookmark(
  id: number,
  payload: BookmarkUpdatePayload,
): Promise<Bookmark> {
  const url = `${instanceUrl()}/bookmarks/${id}`;

  const response = await _fetch(url, 'PATCH', payload);
  const result = Bookmark.parse(response);

  return result;
}

export async function updateBookmarkByUrl(
  url: string,
  payload: BookmarkUpdatePayload,
): Promise<Bookmark | null> {
  const searchResult = await bookmarks({ query: url });

  const item = searchResult.results.find((item) => item.url.includes(url));
  if (!item) {
    return null;
  }

  return await updateBookmark(item.id, payload);
}
