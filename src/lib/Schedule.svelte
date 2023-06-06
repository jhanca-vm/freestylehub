<script lang="ts">
  import 'dayjs/locale/es'
  import dayjs from 'dayjs'
  import utc from 'dayjs/plugin/utc'
  import getFMSColor from './utils/getFMSColor'
  import type { Matchday } from '@prisma/client'

  export let matchdays: (Matchday & { fms: { name: string } })[]

  dayjs.extend(utc)
</script>

<section class="my-11 text-sm font-bold md:(my-16 text-base)">
  <h2 class="text-gradient tracking-wide">Próximas jornadas</h2>
  <span class="block h-px bg-brand-300 mt-3 mb-7 md:mb-9" />
  <ul class="grid gap-y-8 sm:(grid-cols-2 gap-x-7) md:gap-9 lg:grid-cols-3">
    {#each matchdays as { fms, image, number, city, date }}
      {@const color = getFMSColor(fms.name)}
      <li>
        <figure
          class="aspect-2 flex items-end justify-between rounded-2 mr-8px
            mb-8px py-3 px-4 italic border-2 border-{color} shadow-{color}"
          style:--image={`url(${image})`}
        >
          <div>
            <p>FMS {fms.name}</p>
            <p>Jornada {number}</p>
          </div>
          <div class="text-right">
            <p>{city}</p>
            <time datetime={dayjs.utc(date).format('YYYY-MM-DD')}>
              {dayjs.utc(date).locale('es').format('ddd D MMMM')}
            </time>
          </div>
        </figure>
      </li>
    {/each}
  </ul>
</section>

<style>
  figure {
    background: linear-gradient(to top, theme('colors.brand.500'), transparent),
      var(--image) center;
    background-size: cover;
    box-shadow: 12px 12px 24px -6px theme('colors.brand.500'),
      8px 8px var(--un-shadow-color);
  }
</style>
