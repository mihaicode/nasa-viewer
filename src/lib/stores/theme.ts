import { writable } from 'svelte/store';

type Theme = 'light' | 'dark';

function createThemeStore() {
  const { subscribe, set } = writable<Theme>(
    (typeof window !== 'undefined' && 
     window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light'
  );

  // Initialize theme class on load
  if (typeof window !== 'undefined') {
    const initialTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }

  return {
    subscribe,
    toggle: () => {
      let currentTheme: Theme;
      subscribe(theme => {
        currentTheme = theme;
      })();
      
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      set(newTheme);
      
      if (typeof window !== 'undefined') {
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
      }
    },
    set
  };
}

export const theme = createThemeStore();