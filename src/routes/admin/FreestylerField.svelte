<script lang="ts">
  import type { Freestyler } from '@prisma/client'

  export let index: number
  export let options: Freestyler[]

  let value: string
</script>

<label class="tracking-wide" for={`battle-freestyler${index}`}>
  Freestyler # {index}
</label>
<select
  name={`freestylerId${index}`}
  id={`battle-freestyler${index}`}
  required
  bind:value
>
  <option value="" hidden />
  {#each options as { id, name } (id)}
    <option value={id}>{name}</option>
  {/each}
</select>
{#if value}
  {@const pointsId = `battle-freestyler${index}-points`}
  {@const ptbId = `battle-freestyler${index}-ptb`}
  <div class="col-span-2 pl-6 [&_input]:(w-18 pl-2 rounded)">
    <label for={pointsId}>Puntos</label>
    <input type="number" name={`points${index}`} id={pointsId} required />
    <label for={ptbId}>PTB</label>
    <input
      type="number"
      name={`ptb${index}`}
      id={ptbId}
      min="0"
      step="0.5"
      required
    />
  </div>
{/if}
