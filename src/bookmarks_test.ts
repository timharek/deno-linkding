import { assertEquals, assertExists } from '$std/assert/mod.ts';
import { bookmarks } from './bookmarks.ts';

Deno.test('List bookmarks', async () => {
  const result = await bookmarks();

  assertExists(result);
  assertEquals(result.results.length >= 0, true, 'result count');
  assertEquals(result.previous, null);
});
