# deno-linkding

Access your [Linkding](https://github.com/sissbruecker/linkding) instance with Deno.
This module has both a `mod.ts` and a CLI.

## Usage

Requires environment variables for both `LINKDING_URL` and `LINKDING_API`.

### Example for getting all bookmarks

```ts
import { listBookmarks } from "https://deno.land/x/linkding/mod.ts";

const allBookmarks = await listBookmarks({ all: true });
// do what you need to do with the bookmarks.
```

### Example for single bookmark

```ts
import { getBookmark } from "https://deno.land/x/linkding/mod.ts";

const bookmark = await getBookmark(10);
// do what you need to do with the bookmark.
```

## CLI

### Installation

```sh
deno install --allow-env --allow-read --allow-net \
  -n linkding https://deno.land/x/linkding/src/cli.ts
```

### Usage

```sh
# Returns all bookmarks
linkding list
# Returns single bookmark with id `10`
linkding list 10
# Returns all tags
linkding tag
# Returns single tag with id `10`
linkding tag 10
# Returns all bookmarks as json
linkding list --json

# All available commands and flags
linkding -h
```
