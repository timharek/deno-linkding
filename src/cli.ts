// @deno-types='../mod.d.ts'
import { Command, Config } from '../deps.ts';
import { get, getTag, list, listTags } from './read.ts';

const listCmd = new Command()
  .description('')
  .arguments('[id:number]')
  .action(async (options, id?: number) => {
    if (id) {
      console.log(await get(id));
    } else {
      console.log(await list());
    }
  });

const tagCmd = new Command()
  .description('')
  .arguments('[id:number]')
  .action(async (options, id?: number) => {
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
  .example(
    'Example #1',
    'magic -v',
  )
  .globalOption('-v, --verbose', 'A more verbose output.', {
    collect: true,
    value: (value: boolean, previous = 0) => (value ? previous + 1 : 0),
  })
  .action(
    (options: { verbose: number }) => {
      console.log(options);
    },
  )
  .command('list', listCmd)
  .command('tag', tagCmd)
  .parse(Deno.args);
