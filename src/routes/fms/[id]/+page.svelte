<script lang="ts">
  import Groups from './Groups.svelte'
  import type { PageServerData } from './$types'

  export let data: PageServerData

  $: groupA = data.freestylers.filter(({ group }) => group === 'A')
  $: groupB = data.freestylers.filter(({ group }) => group === 'B')
</script>

<svelte:head>
  <title>FMS {data.name}</title>
</svelte:head>

<Groups data={[groupA, groupB]} />
