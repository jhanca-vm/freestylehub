<script lang="ts">
  import getFMSColor from '$lib/utils/getFMSColor'
  import IconShieldFilled from '$lib/icons/IconShieldFilled.svelte'
  import IconShieldOff from '$lib/icons/IconShieldOff.svelte'
  import IconChevronsRight from '$lib/icons/IconChevronsRight.svelte'
  import type { PageServerData } from './$types'

  export let data: PageServerData['transfers']
</script>

<section class="my-20 md:my-28">
  <h2
    class="text-gradient text-xl font-bold tracking-wide mx-auto mb-8 sm:mb-9"
  >
    Traspasos y Fichajes
  </h2>
  <ul class="grid gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
    {#each [...data].reverse() as { freestyler, from, to }}
      <li class="border-y border-transparent pt-2 pb-4">
        <p class="text-center font-semibold mb-2">{freestyler}</p>
        <div
          class="flex items-center justify-center text-sm text-brand-300
            font-medium [&,_&_span]:gap-x-1 [&_svg]:w-5"
        >
          <span class={from ? `flex text-${getFMSColor(from)}` : 'flex'}>
            {#if from}
              <IconShieldFilled />
              FMS {from}
            {:else}
              <IconShieldOff />
            {/if}
          </span>
          <IconChevronsRight />
          <span class="flex text-{getFMSColor(to)}">
            <IconShieldFilled />
            FMS {to}
          </span>
        </div>
      </li>
    {/each}
  </ul>
</section>

<style>
  li {
    border-image: linear-gradient(
        90deg,
        transparent,
        theme('colors.brand.300'),
        transparent
      )
      12;
  }
</style>
