<script lang="ts">
  export let src: string;
  export let alt: string;
  export let title: string;
</script>

<div class="group relative overflow-hidden rounded-lg">
  <img
    {src}
    {alt}
    class="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
    loading="lazy"
  />
  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
    <div class="absolute bottom-4 left-4">
      <h3 class="text-lg font-semibold text-white">{title}</h3>
    </div>
  </div>
</div>