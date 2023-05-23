<script lang="ts">
  import Schedule from '$lib/Schedule.svelte'
  import Transfers from './Transfers.svelte'
  import type { PageServerData } from './$types'

  export let data: PageServerData
</script>

<svelte:head>
  <title>FreestyleHub</title>
  <meta
    name="description"
    content={'Sumérgete en la competición de freestyle más destacada y no te ' +
      'pierdas ningún detalle de las batallas, fechas, jornadas, grupos y ' +
      'traspasos de todas las FMS de Urban Roosters.'}
  />
</svelte:head>

<Schedule matchdays={data.matchdays} />
<Transfers data={data.transfers} />
