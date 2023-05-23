<script lang="ts">
  import Schedule from '$lib/Schedule.svelte'
  import Groups from './Groups.svelte'

  import type { PageServerData } from './$types'

  export let data: PageServerData

  $: groupA = data.freestylers.filter(({ group }) => group === 'A')
  $: groupB = data.freestylers.filter(({ group }) => group === 'B')
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
<Schedule matchdays={data.matchdays} />
