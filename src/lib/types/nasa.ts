export interface ApodImage {
  date: string;
  explanation: string;
  hdurl: string;
  media_type: 'image' | 'video';
  service_version: string;
  title: string;
  url: string;
}

export interface EpicImage {
  identifier: string;
  caption: string;
  image: string;
  version: string;
  date: string;
}