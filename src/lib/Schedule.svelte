<script lang="ts">
  import '@splidejs/svelte-splide/css'
  import 'dayjs/locale/es'
  import dayjs from 'dayjs'
  import utc from 'dayjs/plugin/utc'
  import { Splide, SplideSlide } from '@splidejs/svelte-splide'
  import getFMSColor from './utils/getFMSColor'
  import type { Matchday } from '@prisma/client'

  export let matchdays: (Matchday & { fms: { name: string } })[]

  dayjs.extend(utc)
</script>

<section class="my-11 text-sm font-bold md:(my-16 text-base)">
  <h2 class="text-gradient tracking-wide">Próximas jornadas</h2>
  <span class="block h-px bg-brand-300 mt-3 mb-7 md:mb-9" />
  <Splide
    class="pb-3em"
    options={{
      arrows: false,
      mediaQuery: 'min',
      gap: '2rem',
      breakpoints: {
        640: { perPage: 2 },
        768: { gap: '2.5rem' },
        1024: { perPage: 3 }
      }
    }}
  >
    {#each matchdays as { fms, image, number, city, date }}
      {@const color = getFMSColor(fms.name)}
      <SplideSlide>
        <article
          class="aspect-2 flex items-end justify-between rounded-2 mr-8px mb-8px
            py-3 px-4 italic border-2 border-{color} shadow-{color}"
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
        </article>
      </SplideSlide>
    {/each}
  </Splide>
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
