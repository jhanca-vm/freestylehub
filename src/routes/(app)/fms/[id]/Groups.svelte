<script lang="ts">
  import { page } from '$app/stores'
  import sortFreestylers from '$lib/utils/sortFreestylers'
  import sumResult from '$lib/utils/sumResult'
  import type { PageServerData } from './$types'

  export let data: PageServerData['freestylers'][]
</script>

<section
  class="my-11 grid gap-y-15 tracking-wide md:(my-20 grid-cols-2 gap-x-20)
    xl:gap-x-28"
>
  {#each data as freestylers, index}
    <table class="w-full text-sm [&_tr]:(border-b border-brand-400)">
      <thead>
        <tr class="text-{$page.params.id} children:(pb-3.25 font-bold)">
          <th class="text-left text-lg">
            Grupo {index === 0 ? 'A' : 'B'}
          </th>
          <th>Batallas</th>
          <th>Puntos</th>
        </tr>
      </thead>
      <tbody>
        {#each sortFreestylers(freestylers) as { name, battleResults }}
          <tr
            class="text-center font-medium children:(pt-3 pb-3.75)
              first:text-{$page.params.id} last:text-brand-300
              [&:nth-child(4),_&:nth-child(5)]:text-brand-200"
          >
            <td class="pl-1 text-left font-semibold">{name}</td>
            <td>{battleResults.length} / 7</td>
            <td>{sumResult('points', battleResults)}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  {/each}
</section>
