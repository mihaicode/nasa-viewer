<script lang="ts">
  import TabButton from './TabButton.svelte';
  
  export let selectedTab: 'apod' | 'epic';
</script>

<div class="flex space-x-4 border-b border-gray-200 dark:border-gray-700">
  <TabButton
    selected={selectedTab === 'apod'}
    label="Astronomy Picture of the Day"
    on:click={() => selectedTab = 'apod'}
  />
  <TabButton
    selected={selectedTab === 'epic'}
    label="EPIC Earth Images"
    on:click={() => selectedTab = 'epic'}
  />
</div>