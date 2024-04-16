/**
 * Simple module for accessing your [Linkding](https://github.com/sissbruecker/linkding) instance.
 *
 * ## Example for getting all bookmarks
 * ```ts
 * import { listBookmarks } from 'https://deno.land/x/linkding/mod.ts';
 *
 * const allBookmarks = await listBookmarks({ all: true });
 * // do what you need to do with the bookmarks.
 * ```
 *
 * ## Example for single bookmark
 * ```ts
 * import { getBookmark } from 'https://deno.land/x/linkding/mod.ts';
 *
 * const bookmark = await getBookmark(10);
 * // do what you need to do with the bookmark.
 * ```
 *
 * @module
 */

export { getBookmark, getTag, listBookmarks, listTags } from './src/read.ts';
