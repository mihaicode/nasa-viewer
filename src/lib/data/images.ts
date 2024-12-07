export interface Image {
  id: number;
  src: string;
  alt: string;
  title: string;
}

export const images: Image[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba',
    alt: 'Mountain landscape',
    title: 'Mountain Vista'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1682687221038-404670f09ef7',
    alt: 'Ocean sunset',
    title: 'Sunset Shores'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538',
    alt: 'Forest path',
    title: 'Forest Journey'
  }
];