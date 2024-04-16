/**
 * Simple module for accessing your [Linkding](https://github.com/sissbruecker/linkding) instance.
 *
 * @example List bookmarks
 * ```ts
 * import { bookmarks } from 'https://deno.land/x/linkding/mod.ts';
 *
 * const result = await bookmarks();
 * ```
 *
 * @example Single bookmark
 * ```ts
 * import { bookmark } from 'https://deno.land/x/linkding/mod.ts';
 *
 * const result = await bookmark(10);
 * ```
 *
 * @module
 */

export {
  addBookmark,
  archiveBookmark,
  archiveBookmarkByUrl,
  archivedBookmarks,
  bookmark,
  bookmarkByUrl,
  bookmarks,
  deleteBookmark,
  deleteBookmarkByUrl,
  unarchiveBookmark,
  unarchiveBookmarkByUrl,
  updateBookmark,
  updateBookmarkByUrl,
} from './src/bookmarks.ts';
export { tag, tags } from './src/tags.ts';
