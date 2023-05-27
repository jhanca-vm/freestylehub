<script lang="ts">
  import { toast } from 'svoast'
  import FreestylerField from './FreestylerField.svelte'
  import type { ActionData, PageServerData } from './$types'

  export let data: PageServerData
  export let form: ActionData

  if (form?.success) toast.success('Batalla añadida')
  if (form?.error) toast.error('Ha ocurrido un error')
</script>

<svelte:head>
  <title>FreestyleHub - Admin</title>
</svelte:head>

<main class="px-6 sm:px-8 md:px-12 lg:px-16">
  <section class="w-fit mx-auto my-8 md:my-16">
    <h2 class="text-lg font-semibold mb-6">Añadir batalla</h2>
    <form
      class="[&,_&_div]:(grid grid-cols-[max-content_max-content] gap-5
        items-center) [&_select]:(min-w-28 pt-1 pb-2 px-2 text-white rounded)"
      method="POST"
    >
      <label for="battle-matchday">Jornada</label>
      <select name="matchdayId" id="battle-matchday" required>
        <option value="" hidden />
        {#each data.matchdays as { id, city } (id)}
          <option value={id}>{city}</option>
        {/each}
      </select>
      <FreestylerField index={1} options={data.freestylers} />
      <FreestylerField index={2} options={data.freestylers} />
      <button
        class="col-span-2 bg-brand-300/80 font-semibold tracking-wide p-2 mt-2
          rounded-full transition hover:bg-brand-300"
      >
        Guardar
      </button>
    </form>
  </section>
</main>
