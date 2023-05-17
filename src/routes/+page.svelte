<script lang="ts">
  import Schedule from './Schedule.svelte'
  import Transfers from './Transfers.svelte'
  import type { PageServerData } from './$types'

  export let data: PageServerData
</script>

<svelte:head>
  <title>FreestyleHub</title>
</svelte:head>

<Schedule matchdays={data.matchdays} />
<Transfers data={data.transfers} />
