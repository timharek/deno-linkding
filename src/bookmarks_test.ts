import { assertEquals, assertExists } from '$std/assert/mod.ts';
import {
  addBookmark,
  bookmarkByUrl,
  bookmarks,
  deleteBookmarkByUrl,
} from './bookmarks.ts';

Deno.test('List bookmarks', async () => {
  const result = await bookmarks();

  assertExists(result);
  assertEquals(result.results.length >= 0, true, 'result count');
  assertEquals(result.previous, null);
});

Deno.test('Add bookmark: example.org', async () => {
  const result = await addBookmark({
    title: 'Example',
    url: 'https://example.org',
  });

  assertExists(result);
  assertEquals(result.title, 'Example');
});

Deno.test('Find bookmark: example.org', async () => {
  const result = await bookmarkByUrl('example.org');

  assertExists(result);
  assertEquals(result.title, 'Example');
});

Deno.test('Delete bookmark: example.org', async () => {
  const result = await deleteBookmarkByUrl('example.org');

  assertExists(result);
});
