import { UserPreferences } from './schemas.ts';
import { _fetch, instanceUrl } from './utils.ts';

/**
 * List user preferences.
 *
 * @returns User preferences
 */
export async function userPreferences(): Promise<UserPreferences> {
  const url = `${instanceUrl()}/user/profile/`;

  const response = await _fetch(url, 'GET');
  const result = UserPreferences.parse(response);

  return result;
}
