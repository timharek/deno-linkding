// @deno-types='../mod.d.ts'

import { Colors } from '../deps.ts';

export function getMessage<T extends Linkding.IBookmark | Linkding.ITag>(
  input: T,
): string {
  if ('name' in input) {
    return getMessageTag(input);
  } else {
    return getMessageBookmark(input);
  }
}

function getMessageTag(input: Linkding.ITag): string {
  return `
${input.name}
  id: ${input.id}
  date_added: ${input.date_added}
  `;
}

function getMessageBookmark(input: Linkding.IBookmark): string {
  return `
${Colors.underline(input.title)}
  url: ${Colors.blue(input.url)}
  id: ${input.id}
  date_added: ${input.date_added}
  description: ${input.description ? `${input.description}` : ''}
  tags: ${input.tag_names.length > 0 ? `#${input.tag_names.join(', #')}` : ''}
  `;
}
