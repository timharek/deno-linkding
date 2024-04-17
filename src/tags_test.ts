import { assertEquals, assertExists } from '$std/assert/mod.ts';
import { addTag, tags } from './tags.ts';

Deno.test('List tags', async () => {
  const result = await tags();

  assertExists(result);
  assertEquals(result.results.length >= 0, true, 'result count');
  assertEquals(result.previous, null);
});

Deno.test('Add tag: test-tag', async () => {
  const result = await addTag({
    name: 'test-tag',
  });

  assertExists(result);
  assertEquals(result.name, 'test-tag');
});
