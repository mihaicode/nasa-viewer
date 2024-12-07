<script lang="ts">
  import NasaGallery from './lib/components/nasa/NasaGallery.svelte';
  import ThemeToggle from './lib/components/common/ThemeToggle.svelte';
</script>

<div class="min-h-screen bg-white transition-colors dark:bg-gray-900">
  <header class="border-b border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
    <div class="mx-auto flex max-w-7xl items-center justify-between">
      <h1 class="text-2xl font-bold text-gray-900 dark:text-white">NASA Image Explorer</h1>
      <ThemeToggle />
    </div>
  </header>

  <main class="mx-auto max-w-7xl p-4">
    <NasaGallery />
  </main>
</div>