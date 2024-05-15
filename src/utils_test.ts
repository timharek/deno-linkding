import { assertEquals, assertExists } from 'std/assert';
import { instanceUrl } from './utils.ts';

Deno.test('Get `instanceUrl`', () => {
  const url = instanceUrl();

  assertExists(url);
  assertEquals(url.includes('/api'), true);
});
