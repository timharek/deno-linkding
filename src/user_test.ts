import { assertEquals, assertExists } from '$std/assert/mod.ts';
import { userPreferences } from './user.ts';

Deno.test('Get user preferences', async () => {
  const user = await userPreferences();

  assertExists(user);
  assertEquals(user.theme, 'auto');
});
