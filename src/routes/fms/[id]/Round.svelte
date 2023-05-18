<script lang="ts">
  import { page } from '$app/stores'

  export let name: string
  export let battles: { name: string; won: boolean | null }[][]
</script>

<article class="self-center sm:last:grid-col-span-2 lg:last:grid-col-span-1">
  <h3 class="font-semibold text-lg text-gradient mx-auto">
    {name}
  </h3>
  {#each battles as [opponent1, opponent2]}
    <p
      class="flex items-center justify-center gap-x-2 pt-4 pb-5 mt-5 text-sm
        font-medium border-gradient"
    >
      <span class:text-brand-300={opponent1.won === false}>
        {opponent1.name}
      </span>
      <span class="text-{$page.params.id} font-semibold">vs</span>
      <span class:text-brand-300={opponent2.won === false}>
        {opponent2.name}
      </span>
    </p>
  {/each}
</article>
