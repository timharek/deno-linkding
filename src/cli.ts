// @deno-types='../mod.d.ts'

import { Command, Config } from '../deps.ts';
import { getBookmark, getTag, listBookmarks, listTags } from './read.ts';
import { getVerbosityMessage } from './cli_util.ts';

const listCmd = new Command()
  .description(
    'Get all bookmarks or a single bookmark depending if <id> is provided or not.',
  )
  .arguments('[id:number]')
  .example('Filter for specific tag', 'linkding list -q="#my-tag"')
  .option(
    '-q --query <query:string>',
    'Filters results using a search phrase using the same logic as through the UI.',
  )
  .option(
    '-l --limit <limit:number>',
    'Limits the max. number of results.',
  )
  .option(
    '-o --offset <offset:number>',
    'Index from which to start returning results.',
  )
  .option(
    '-a --all',
    'Get all bookmarks in one go.',
  )
  .action(async (options: unknown, id?: number) => {
    const response = id
      ? await getBookmark(id)
      : await listBookmarks(options as Linkding.IListParams);

    if ((options as IOptions).json) {
      console.log(response);
    } else {
      type resType = typeof response;
      getVerbosityMessage<resType>(
        response,
        (options as IOptions).verbose,
      );
    }
  });

const tagCmd = new Command()
  .description(
    'Get all tags or a single tag depending if <id> is provided or not.',
  )
  .arguments('[id:number]')
  .action(async (_options: unknown, id?: number) => {
    if (id) {
      console.log(await getTag(id));
    } else {
      console.log(await listTags());
    }
  });

await new Command()
  .name(Config.name)
  .version(Config.version)
  .description(Config.description)
  .meta('Author', Config.author)
  .meta('Source', Config.source)
  .example('Get all bookmarks', 'linkding list')
  .example('Get single bookmark', 'linkding list 10')
  .example('Get all tags', 'linkding tag')
  .example('Get single tag', 'linkding tag 10')
  .globalOption('-v, --verbose', 'A more verbose output.', {
    collect: true,
    value: (value: boolean, previous = 0) => (value ? previous + 1 : 0),
  })
  .globalOption('--json', 'Display JSON output.')
  .action(
    (options: { verbose: number }) => {
      console.log(options);
    },
  )
  .command('list', listCmd)
  .command('tag', tagCmd)
  .parse(Deno.args);
