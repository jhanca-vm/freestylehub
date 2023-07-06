<script>
  import 'dayjs/locale/es'
  import dayjs from 'dayjs'
  import utc from 'dayjs/plugin/utc'
  import { Carrusel, CarruselSlide } from 'carrusel'
  import { page } from '$app/stores'
  import Pagination from './Pagination.svelte'

  /** @type {import('@prisma/client').Matchday[]} */
  const matchdays = $page.data.matchdays

  /** @type {Carrusel} */
  let carousel
  /** @type {number} */
  let pages
  /** @type {number} */
  let currentPage

  dayjs.extend(utc)
</script>

<section>
  <Carrusel
    bind:this={carousel}
    bind:pages
    bind:currentPage
    ariaLabel="Calendario"
    pagination
    draggable
  >
    {#each matchdays as { fmsId, date, number, city }}
      {@const utc = dayjs.utc(date)}
      <CarruselSlide>
        <div>
          <h3>FMS {fmsId}</h3>
          <time datetime={utc.format('YYYY-MM-DD')}>
            {utc.locale('es').format('D MMMM')}
          </time>
          <p>{city} - Jornada {number}</p>
        </div>
      </CarruselSlide>
    {/each}
    <svelte:fragment slot="nav">
      {#if pages !== 1}
        <Pagination {pages} {currentPage} goToPage={carousel?.goToPage} />
      {/if}
    </svelte:fragment>
  </Carrusel>
</section>

<style>
  section {
    --gap: 2.8rem;
    border-bottom: 1px solid rgb(var(--color-300));
    padding-block: 2.8rem;
  }

  section :global(ul) {
    grid-template-rows: repeat(2, 1fr);
  }

  div {
    background: linear-gradient(
      to right,
      transparent,
      rgb(var(--color-300)),
      transparent
    );
    box-shadow: 0 8px 8px -4px black;
    letter-spacing: 0.05em;
    padding: 2.4rem 2.8rem 2.6rem;
    text-align: center;
  }

  h3 {
    font-size: 1.4rem;
  }

  time {
    display: block;
    font-size: 2.8rem;
    font-weight: bold;
    margin-block: 0.8rem;
  }

  p {
    font-size: 1.3rem;
    opacity: 0.75;
  }

  @media (min-width: 640px) {
    section {
      --per-view: 2;
    }

    section :global(ul) {
      grid-template-rows: 1fr;
    }
  }

  @media (min-width: 768px) {
    section {
      padding-block: 4rem;
    }

    h3 {
      font-size: 1.6rem;
    }

    time {
      font-size: 3.2rem;
    }

    p {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 1024px) {
    section {
      --per-view: 3;
    }
  }
</style>
