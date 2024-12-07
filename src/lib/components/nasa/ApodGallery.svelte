<script lang="ts">
  import ImageCard from '../common/ImageCard.svelte';
  import type { ApodImage } from '../../types/nasa';

  export let images: ApodImage[];
</script>

<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
  {#each images as image}
    <ImageCard
      src={image.url}
      alt={image.title}
      title={image.title}
    />
  {/each}
</div>