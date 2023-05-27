<script lang="ts">
  import getFMSColor from '$lib/utils/getFMSColor'
  import IconShieldFilled from '$lib/icons/IconShieldFilled.svelte'
  import IconShieldOff from '$lib/icons/IconShieldOff.svelte'
  import IconChevronsRight from '$lib/icons/IconChevronsRight.svelte'
  import type { PageServerData } from './$types'

  export let data: PageServerData['transfers']
</script>

<section class="mt-16 mb-20 md:(mt-20 mb-28)">
  <h2
    class="text-gradient text-xl font-bold tracking-wide mx-auto mb-8 sm:mb-9"
  >
    Traspasos y Fichajes
  </h2>
  <ul class="grid gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
    {#each data as { freestyler, fromFMS, toFMS }}
      <li class="border-gradient pt-2 pb-4">
        <p class="text-center font-semibold mb-2">{freestyler.name}</p>
        <div
          class="flex items-center justify-center text-sm text-brand-300
            font-medium [&,_&_span]:gap-x-1 [&_svg]:w-5"
        >
          <span
            class={fromFMS ? `flex text-${getFMSColor(fromFMS.name)}` : 'flex'}
          >
            {#if fromFMS}
              <IconShieldFilled />
              FMS {fromFMS.name}
            {:else}
              <IconShieldOff />
            {/if}
          </span>
          <IconChevronsRight />
          <span class="flex text-{getFMSColor(toFMS.name)}">
            <IconShieldFilled />
            FMS {toFMS.name}
          </span>
        </div>
      </li>
    {/each}
  </ul>
</section>
