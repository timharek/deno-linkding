import { z } from 'zod';

const Response = z.object({
  count: z.number(),
  next: z.string().nullable(),
  previous: z.number().nullable(),
});

export const Bookmark = z.object({
  id: z.number(),
  url: z.string(),
  title: z.string(),
  description: z.string(),
  notes: z.string(),
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

export const UserPreferences = z.object({
  theme: z.enum(['auto', 'light', 'dark']),
  bookmark_date_display: z.enum(['relative', 'absolute', 'hidden']),
  bookmark_link_target: z.enum(['_blank']),
  web_archive_integration: z.enum(['enabled', 'disabled']),
  tag_search: z.enum(['lax', 'strict']),
  enable_sharing: z.boolean(),
  enable_public_sharing: z.boolean(),
  enable_favicons: z.boolean(),
  display_url: z.boolean(),
  permanent_notes: z.boolean(),
  search_preferences: z.object({
    sort: z.enum(['title_asc', 'title_desc', 'added_asc', 'added_desc'])
      .optional(),
    shared: z.enum(['off', 'on']).optional(),
    unread: z.enum(['off', 'on']).optional(),
  }),
});

export type Bookmark = z.infer<typeof Bookmark>;
export type Tag = z.infer<typeof Tag>;
export type UserPreferences = z.infer<typeof UserPreferences>;
export type BookmarksResponse = z.infer<typeof BookmarksResponse>;
export type TagsResponse = z.infer<typeof TagsResponse>;
