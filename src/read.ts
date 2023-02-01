// @deno-types='../mod.d.ts'

import 'https://deno.land/std@0.175.0/dotenv/load.ts';
import { _fetch } from './util.ts';

export async function list() {
  const url = new URL(`${Deno.env.get('LINKDING_URL')}/api/bookmarks/`);
  const token = `${Deno.env.get('LINKDING_API')}`;

  const response: Linkding.IListResponse = await _fetch(url, 'GET', token);

  return response;
}
