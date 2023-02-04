declare namespace Linkding {
  interface IResponse {
    count: number;
    next: string;
    previous: number | null;
  }

  interface IListResponse extends IResponse {
    results: IBookmark[];
  }

  interface IParams {
    limit?: number;
    offset?: number;
  }

  interface IListParams extends IParams {
    query?: string;
    all: boolean;
  }

  interface IBookmark {
    id: number;
    url: string;
    title: string;
    description: string;
    website_title: string | null;
    website_description: string | null;
    is_archived: boolean;
    unread: boolean;
    shared: boolean;
    tag_names: string[];
    date_added: string;
    date_modified: string;
  }

  interface ITagsResponse extends IResponse {
    results: ITag[];
  }

  interface ITag {
    id: number;
    name: string;
    date_added: string;
  }
}

interface IOptions {
  verbose: number;
  json: boolean;
}
