<script lang="ts">
  import { onMount } from 'svelte';
  import { nasaStore } from '../../stores/nasa';
  import Tabs from './Tabs.svelte';
  import ApodGallery from './ApodGallery.svelte';
  import EpicGallery from './EpicGallery.svelte';
  import LoadingSpinner from '../common/LoadingSpinner.svelte';
  import ErrorMessage from '../common/ErrorMessage.svelte';

  let selectedTab: 'apod' | 'epic' = 'apod';

  $: if (selectedTab === 'epic' && $nasaStore.epicImages.length === 0) {
    nasaStore.fetchEpicImages();
  }

  onMount(() => {
    nasaStore.fetchApodImages();
  });
</script>

<div class="space-y-6">
  <Tabs bind:selectedTab />

  {#if $nasaStore.loading}
    <LoadingSpinner />
  {:else if $nasaStore.error}
    <ErrorMessage message={$nasaStore.error} />
  {:else}
    {#if selectedTab === 'apod'}
      <ApodGallery images={$nasaStore.apodImages} />
    {:else}
      <EpicGallery images={$nasaStore.epicImages} />
    {/if}
  {/if}
</div>