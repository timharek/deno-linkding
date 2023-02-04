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
  const url = `${Deno.env.get('LINKDING_URL')}/bookmarks?q=%23${input.name}`;
  return `
#${Colors.underline(input.name)}
  url: ${Colors.blue(url)}
  id: ${input.id}
  date_added: ${formatDate(input.date_added)}
  `;
}

function getMessageBookmark(input: Linkding.IBookmark): string {
  return `
${Colors.underline(input.title)}
  url: ${Colors.blue(input.url)}
  id: ${input.id}
  date_added: ${formatDate(input.date_added)}
  description: ${input.description ? `${input.description}` : ''}
  tags: ${input.tag_names.length > 0 ? `#${input.tag_names.join(', #')}` : ''}
  `;
}

/**
 * Formats date to YYYY-MM-DD.
 * @param dateString
 *
 * @returns YYYY-MM-DD string
 */
function formatDate(dateString: string): string {
  const date = new Date(dateString);

  return date.toISOString().split('T')[0];
}
