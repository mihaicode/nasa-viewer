<script lang="ts">
  import { theme } from '../stores/theme';
</script>

<button
  class="rounded-lg bg-gray-200 p-2 dark:bg-gray-700"
  on:click={() => theme.toggle()}
  aria-label="Toggle theme"
>
  {#if $theme === 'light'}
    🌙
  {:else}
    ☀️
  {/if}
</button>