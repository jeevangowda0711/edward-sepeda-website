/**
 * Gallery media — replace placeholders with real entries as assets are ready.
 * Images: add `{ kind: 'image', id, src, alt, caption? }`.
 * YouTube (official embed only): `{ kind: 'youtube', id, videoId, title }`.
 */
export type GalleryItem =
  | {kind: 'placeholder'; id: string}
  | {kind: 'image'; id: string; src: string; alt: string; caption?: string}
  | {kind: 'youtube'; id: string; videoId: string; title: string};

export const galleryItems: GalleryItem[] = Array.from({length: 9}, (_, i) => ({
  kind: 'placeholder',
  id: `placeholder-${i + 1}`,
}));
