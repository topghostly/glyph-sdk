export type Mark = {
  type: "bold" | "italic" | "link" | "strike" | "highlight" | "code";
  attrs?: { href?: string };
};

export type Node = {
  type:
    | "paragraph"
    | "heading"
    | "bulletList"
    | "orderedList"
    | "listItem"
    | "image"
    | "blockquote"
    | "codeBlock"
    | "text";
  content?: Node[];
  text?: string;
  marks?: Mark[];
  attrs?: {
    level?: number;
    src?: string;
    alt?: string;
  };
};

export type Blog = {
  _localID: string;
  content: {
    title: string;
    tags?: string[];
    mainImage?: {
      url?: string;
      alt?: string;
    };
    mainImageBlobUrl?: string;
    body?: Node[];
    conclusion?: Node[];
    links?: string[];
  };
  creator: string;
};
