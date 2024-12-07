<script lang="ts">
  import ImageCard from '../common/ImageCard.svelte';
  import type { EpicImage } from '../../types/nasa';
  import { format } from 'date-fns';

  export let images: EpicImage[];
</script>

<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
  {#each images as image}
    <ImageCard
      src={`https://epic.gsfc.nasa.gov/archive/natural/${format(new Date(image.date), 'yyyy/MM/dd')}/png/${image.image}.png`}
      alt={image.caption}
      title={format(new Date(image.date), 'MMM dd, yyyy')}
    />
  {/each}
</div>