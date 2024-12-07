<script lang="ts">
  import { onMount } from 'svelte';
  import { nasaStore } from '../stores/nasa';
  import ImageCard from './ImageCard.svelte';
  import { format } from 'date-fns';

  let selectedTab: 'apod' | 'epic' = 'apod';

  onMount(() => {
    nasaStore.fetchApodImages();
  });

  function handleTabChange(tab: 'apod' | 'epic') {
    selectedTab = tab;
    if (tab === 'epic') {
      nasaStore.fetchEpicImages();
    }
  }
</script>

<div class="space-y-6">
  <div class="flex space-x-4 border-b border-gray-200 dark:border-gray-700">
    <button
      class="px-4 py-2 {selectedTab === 'apod' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}"
      on:click={() => handleTabChange('apod')}
    >
      Astronomy Picture of the Day
    </button>
    <button
      class="px-4 py-2 {selectedTab === 'epic' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}"
      on:click={() => handleTabChange('epic')}
    >
      EPIC Earth Images
    </button>
  </div>

  {#if $nasaStore.loading}
    <div class="flex justify-center py-8">
      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
    </div>
  {:else if $nasaStore.error}
    <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
      {$nasaStore.error}
    </div>
  {:else}
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {#if selectedTab === 'apod'}
        {#each $nasaStore.apodImages as image}
          <ImageCard
            src={image.url}
            alt={image.title}
            title={image.title}
          />
        {/each}
      {:else}
        {#each $nasaStore.epicImages as image}
          <ImageCard
            src={`https://epic.gsfc.nasa.gov/archive/natural/${format(new Date(image.date), 'yyyy/MM/dd')}/png/${image.image}.png`}
            alt={image.caption}
            title={format(new Date(image.date), 'MMM dd, yyyy')}
          />
        {/each}
      {/if}
    </div>
  {/if}
</div>