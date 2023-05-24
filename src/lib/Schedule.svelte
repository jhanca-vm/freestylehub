<script lang="ts">
  import '@splidejs/svelte-splide/css'
  import 'dayjs/locale/es'
  import dayjs from 'dayjs'
  import utc from 'dayjs/plugin/utc'
  import { Splide, SplideSlide, type Options } from '@splidejs/svelte-splide'
  import { browser } from '$app/environment'
  import getFMSColor from './utils/getFMSColor'
  import type { Matchday } from '@prisma/client'

  export let matchdays: (Matchday & { fms: { name: string } })[]

  const options: Options = {
    arrows: false,
    mediaQuery: 'min',
    gap: '2rem',
    breakpoints: {
      640: { perPage: 2 },
      768: { gap: '2.5rem' },
      1024: { perPage: 3 }
    }
  }

  dayjs.extend(utc)
</script>

<section class="my-11 text-sm font-bold md:(my-16 text-base)">
  <h2 class="text-gradient tracking-wide">Próximas jornadas</h2>
  <span class="block h-px bg-brand-300 mt-3 mb-7 md:mb-9" />
  {#if browser}
    <Splide class="pb-3em" {options}>
      {#each matchdays as { fms, image, number, city, date }}
        {@const color = getFMSColor(fms.name)}
        <SplideSlide>
          <article
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
          </article>
        </SplideSlide>
      {/each}
    </Splide>
  {:else}
    <div
      class="flex overflow-x-hidden children:(flex-[0_0_100%] bg-gradient-to-r
      from-brand-400/25 to-brand-300/25 aspect-2 rounded-2 animate-pulse)
      sm:(gap-x-8 children:flex-[0_0_calc(50%_-_1rem)]) md:(gap-x-10
      children:flex-[0_0_calc(50%_-_1.25rem)]) lg:children:flex-1"
    >
      <div />
      <div />
      <div />
    </div>
  {/if}
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
