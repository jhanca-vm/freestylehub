<script lang="ts">
  import { page } from '$app/stores'
  import type { PageServerData } from './$types'

  export let data: PageServerData['freestylers'][]

  type Freestyler = PageServerData['freestylers'][number]
  type Battle = [string, number] | undefined

  const getPoints = ([, points]: any): number => points

  const reducer = (acc: number, value: number) => acc + value

  const hasOpponent = (opponent: string) => {
    return ([name]: any) => name === opponent
  }

  const compareResults = (a: Freestyler, b: Freestyler) => {
    const aPoints = a.battles.map(getPoints).reduce(reducer, 0)
    const bPoints = b.battles.map(getPoints).reduce(reducer, 0)

    if (aPoints === bPoints) {
      const aBattle = a.battles.find(hasOpponent(b.name)) as Battle
      const bBattle = b.battles.find(hasOpponent(a.name)) as Battle

      return (aBattle?.[1] ?? 0) - (bBattle?.[1] ?? 0)
    }

    return bPoints - aPoints
  }
</script>

<section
  class="my-11 grid gap-y-15 tracking-wide md:(my-20 grid-cols-2 gap-x-20)
    xl:gap-x-28"
>
  {#each data as freestylers, index}
    {@const sortedFreestylers = [...freestylers].sort(compareResults)}
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
        {#each sortedFreestylers as { name, battles }, index}
          <tr
            class="text-center children:(pt-3 pb-3.75)
              first:text-{$page.params.id} last:text-brand-300
              [&:nth-child(4),_&:nth-child(5)]:text-brand-200"
          >
            <td class="pl-1 text-left font-medium">{name}</td>
            <td>{battles.length} / 7</td>
            <td>{battles.map(getPoints).reduce(reducer, 0)}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  {/each}
</section>
