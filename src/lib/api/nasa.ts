import { NASA_API_KEY, NASA_API_BASE_URL, NASA_ENDPOINTS } from '../config/nasa';
import type { ApodImage, EpicImage } from '../types/nasa';

class NasaAPI {
  private async fetchWithKey(endpoint: string, params: Record<string, string> = {}) {
    const searchParams = new URLSearchParams({
      ...params,
      api_key: NASA_API_KEY,
    });

    const response = await fetch(
      `${NASA_API_BASE_URL}${endpoint}?${searchParams.toString()}`
    );

    if (!response.ok) {
      throw new Error(`NASA API error: ${response.statusText}`);
    }

    return response.json();
  }

  async getAstronomyPictureOfTheDay(date?: string): Promise<ApodImage> {
    const params: Record<string, string> = {};
    if (date) params.date = date;
    return this.fetchWithKey(NASA_ENDPOINTS.APOD, params);
  }

  async getLastWeekApod(): Promise<ApodImage[]> {
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 7);

    const params = {
      start_date: startDate.toISOString().split('T')[0],
      end_date: endDate.toISOString().split('T')[0],
    };

    return this.fetchWithKey(NASA_ENDPOINTS.APOD, params);
  }

  async getEpicImages(): Promise<EpicImage[]> {
    return this.fetchWithKey(NASA_ENDPOINTS.EPIC);
  }
}

export const nasaApi = new NasaAPI();