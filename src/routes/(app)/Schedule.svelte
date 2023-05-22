<script lang="ts">
  import 'dayjs/locale/es'
  import dayjs from 'dayjs'
  import getFMSColor from '$lib/utils/getFMSColor'
  import type { PageServerData } from './$types'

  export let matchdays: PageServerData['matchdays']
</script>

<section class="my-11 text-sm font-semibold md:(my-16 text-base)">
  <h2 class="text-gradient tracking-wide">Próximas jornadas</h2>
  <span class="block h-px bg-brand-300 mt-3 mb-7 md:mb-9" />
  <div class="grid gap-7.5 sm:grid-cols-2 md:gap-10 lg:grid-cols-3">
    {#each matchdays as { fms, image, number, city, date }}
      {@const color = getFMSColor(fms.name)}
      <article
        class="aspect-2 flex items-end justify-between rounded-2 mr-8px mb-8px
          py-3 px-4 italic border-2 border-{color} shadow-{color}
          sm:last-of-type:hidden lg:last-of-type:flex"
        style:--image={`url(${image})`}
      >
        <div>
          <p>FMS {fms.name}</p>
          <p>Jornada {number}</p>
        </div>
        <div class="text-right">
          <p>{city}</p>
          <time datetime={date}>
            {dayjs(date).locale('es').format('ddd D MMMM')}
          </time>
        </div>
      </article>
    {/each}
  </div>
</section>

<style>
  article {
    background: linear-gradient(to top, theme('colors.brand.500'), transparent),
      var(--image) center;
    background-size: cover;
    box-shadow: 12px 12px 24px -6px theme('colors.brand.500'),
      8px 8px var(--un-shadow-color);
  }
</style>
