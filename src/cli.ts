// @deno-types='../mod.d.ts'
import { Command, Config } from '../deps.ts';
import { list } from './read.ts';

const listCmd = new Command()
  .description('')
  .action(async (options) => {
    console.log(await list());
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
  .parse(Deno.args);
