<script lang="ts">
  export let selected: boolean;
  export let label: string;
</script>

<button
  class="px-4 py-2 {selected ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}"
  on:click
>
  {label}
</button>