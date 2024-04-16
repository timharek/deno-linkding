import { z } from 'zod';

const Response = z.object({
  count: z.number(),
  next: z.string(),
  previous: z.number().nullable(),
});

export const Bookmark = z.object({
  id: z.number(),
  url: z.string(),
  title: z.string(),
  description: z.string(),
  website_title: z.string().nullable(),
  website_description: z.string().nullable(),
  is_archived: z.boolean(),
  unread: z.boolean(),
  shared: z.boolean(),
  tag_names: z.array(z.string()),
  date_added: z.string(),
  date_modified: z.string(),
});

export const BookmarksResponse = z.object({
  results: z.array(Bookmark),
}).and(Response);

export const Tag = z.object({
  id: z.number(),
  name: z.string(),
  date_added: z.string(),
});

export const TagsResponse = z.object({
  results: z.array(Tag),
}).and(Response);

export type Bookmark = z.infer<typeof Bookmark>;
export type Tag = z.infer<typeof Tag>;
export type BookmarksResponse = z.infer<typeof BookmarksResponse>;
export type TagsResponse = z.infer<typeof TagsResponse>;
