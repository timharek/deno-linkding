// @deno-types='../mod.d.ts'

import { Command, Config } from '../deps.ts';
import { getListOrBookmark, getTagsOrTag } from './util.ts';

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
    console.log(await getListOrBookmark(options, id));
  });

const tagCmd = new Command()
  .description(
    'Get all tags or a single tag depending if <id> is provided or not.',
  )
  .arguments('[id:number]')
  .action(async (_options: unknown, id?: number) => {
    console.log(await getTagsOrTag(_options, id));
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
  .globalOption('--json', 'Display JSON output.')
  .action(
    (options: { verbose: number }) => {
      console.log(options);
    },
  )
  .command('list', listCmd)
  .command('tag', tagCmd)
  .parse(Deno.args);
