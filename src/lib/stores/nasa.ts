import { writable } from 'svelte/store';
import type { ApodImage, EpicImage } from '../types/nasa';
import { nasaApi } from '../api/nasa';

function createNasaStore() {
  const { subscribe, set, update } = writable<{
    apodImages: ApodImage[];
    epicImages: EpicImage[];
    loading: boolean;
    error: string | null;
  }>({
    apodImages: [],
    epicImages: [],
    loading: false,
    error: null,
  });

  return {
    subscribe,
    fetchApodImages: async () => {
      update(state => ({ ...state, loading: true, error: null }));
      try {
        const images = await nasaApi.getLastWeekApod();
        update(state => ({
          ...state,
          apodImages: images.filter(img => img.media_type === 'image'),
          loading: false,
        }));
      } catch (error) {
        update(state => ({
          ...state,
          error: error instanceof Error ? error.message : 'Failed to fetch APOD images',
          loading: false,
        }));
      }
    },
    fetchEpicImages: async () => {
      update(state => ({ ...state, loading: true, error: null }));
      try {
        const images = await nasaApi.getEpicImages();
        update(state => ({
          ...state,
          epicImages: images,
          loading: false,
        }));
      } catch (error) {
        update(state => ({
          ...state,
          error: error instanceof Error ? error.message : 'Failed to fetch EPIC images',
          loading: false,
        }));
      }
    },
  };
}

export const nasaStore = createNasaStore();