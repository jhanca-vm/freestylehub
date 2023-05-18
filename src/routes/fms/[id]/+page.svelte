<script lang="ts">
  import Groups from './Groups.svelte'
  import Bracket from './Bracket.svelte'
  import Round from './Round.svelte'
  import type { PageServerData } from './$types'

  export let data: PageServerData

  $: groupA = data.freestylers.filter(({ group }) => group === 'A')
  $: groupB = data.freestylers.filter(({ group }) => group === 'B')
  $: postseason = data.postseason as Record<string, any>
  $: relegation = data.relegation as Record<string, any>
</script>

<svelte:head>
  <title>FMS {data.name}</title>
  <meta
    name="description"
    content={'Obtén las últimas actualizaciones y resultados de la ' +
      `FMS ${data.name}. Descubre quiénes son los MCs que están luchando por ` +
      'consagrarse como campeones y aquellos que se enfrentan a la difícil ' +
      'tarea de evitar el descenso.'}
  />
</svelte:head>

<Groups data={[groupA, groupB]} />
<Bracket title="Lucha por el título">
  <Round name="Batallas por semifinales" battles={postseason.playoffs} />
  <Round name="Semifinales" battles={postseason.semifinals} />
  <Round name="Final" battles={[postseason.final]} />
</Bracket>
<Bracket title="Lucha por la permanencia">
  <Round name="Batallas por la permanencia" battles={relegation.survivals} />
  <Round name="Última oportunidad" battles={relegation.removals} />
  <Round name="Playoffs de ascenso" battles={relegation.playoffs} />
</Bracket>
