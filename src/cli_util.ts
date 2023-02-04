// @deno-types='../mod.d.ts'

import { Colors } from '../deps.ts';

export function getVerbosityMessage<
  T extends Linkding.IBookmark | Linkding.ITag,
>(
  input: T,
  verbose: number,
): void {
  if (Array.isArray(input)) {
    for (const item of input) {
      getVerbosityMessage<T>(item, verbose);
    }
    return;
  }

  if ('name' in input) {
    const result = `
${input.name}
  id: ${input.id}
  date_added: ${input.date_added}
  `;
    console.log(result);
  } else {
    const result = `
${Colors.underline(input.title)}
  url: ${Colors.blue(input.url)}
  id: ${input.id}
  date_added: ${input.date_added}
  description: ${input.description ? `${input.description}` : ''}
  tags: ${input.tag_names.length > 0 ? `#${input.tag_names.join(', #')}` : ''}
  `;
    console.log(result);
  }
}
