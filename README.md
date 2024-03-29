[![Latest version](https://deno.land/badge/linkding/version)](https://deno.land/x/linkding)
[![sourcehut](https://img.shields.io/badge/repository-sourcehut-lightgrey.svg?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSINCiAgICB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCI+DQogIDxkZWZzPg0KICAgIDxmaWx0ZXIgaWQ9InNoYWRvdyIgeD0iLTEwJSIgeT0iLTEwJSIgd2lkdGg9IjEyNSUiIGhlaWdodD0iMTI1JSI+DQogICAgICA8ZmVEcm9wU2hhZG93IGR4PSIwIiBkeT0iMCIgc3RkRGV2aWF0aW9uPSIxLjUiDQogICAgICAgIGZsb29kLWNvbG9yPSJibGFjayIgLz4NCiAgICA8L2ZpbHRlcj4NCiAgICA8ZmlsdGVyIGlkPSJ0ZXh0LXNoYWRvdyIgeD0iLTEwJSIgeT0iLTEwJSIgd2lkdGg9IjEyNSUiIGhlaWdodD0iMTI1JSI+DQogICAgICA8ZmVEcm9wU2hhZG93IGR4PSIwIiBkeT0iMCIgc3RkRGV2aWF0aW9uPSIxLjUiDQogICAgICAgIGZsb29kLWNvbG9yPSIjQUFBIiAvPg0KICAgIDwvZmlsdGVyPg0KICA8L2RlZnM+DQogIDxjaXJjbGUgY3g9IjUwJSIgY3k9IjUwJSIgcj0iMzglIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjQlIg0KICAgIGZpbGw9Im5vbmUiIGZpbHRlcj0idXJsKCNzaGFkb3cpIiAvPg0KICA8Y2lyY2xlIGN4PSI1MCUiIGN5PSI1MCUiIHI9IjM4JSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSI0JSINCiAgICBmaWxsPSJub25lIiBmaWx0ZXI9InVybCgjc2hhZG93KSIgLz4NCjwvc3ZnPg0KCg==)](https://sr.ht/~timharek/deno-linkding)
[![GitHub mirror](https://img.shields.io/badge/mirror-GitHub-black.svg?logo=github)](https://github.com/timharek/deno-linkding)

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
