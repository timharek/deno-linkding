import { assertEquals, assertExists } from '$std/assert/mod.ts';
import { tags } from './tags.ts';

Deno.test('List tags', async () => {
  const result = await tags();

  assertExists(result);
  assertEquals(result.results.length >= 0, true, 'result count');
  assertEquals(result.previous, null);
});
