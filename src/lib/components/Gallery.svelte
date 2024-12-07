<script lang="ts">
  import ImageCard from './ImageCard.svelte';
  import { images } from '../data/images';
</script>

<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
  {#each images as image (image.id)}
    <ImageCard
      src={image.src}
      alt={image.alt}
      title={image.title}
    />
  {/each}
</div>