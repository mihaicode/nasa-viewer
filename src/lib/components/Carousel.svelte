<script lang="ts">
  import { onMount } from 'svelte';
  import { images } from '../data/images';

  let currentIndex = 0;
  let autoplayInterval: number;

  function next() {
    currentIndex = (currentIndex + 1) % images.length;
  }

  function prev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  }

  onMount(() => {
    autoplayInterval = setInterval(next, 5000);
    return () => clearInterval(autoplayInterval);
  });
</script>

<div class="relative h-[500px] w-full overflow-hidden rounded-lg">
  <div
    class="absolute inset-0 flex transition-transform duration-500"
    style="transform: translateX(-{currentIndex * 100}%)"
  >
    {#each images as image (image.id)}
      <img
        src={image.src}
        alt={image.alt}
        class="h-full w-full flex-shrink-0 object-cover"
      />
    {/each}
  </div>

  <button
    class="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-opacity hover:bg-black/70"
    on:click={prev}
    aria-label="Previous image"
  >
    ←
  </button>

  <button
    class="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-opacity hover:bg-black/70"
    on:click={next}
    aria-label="Next image"
  >
    →
  </button>
</div>