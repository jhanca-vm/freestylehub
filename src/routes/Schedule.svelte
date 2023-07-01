<script>
  import 'dayjs/locale/es'
  import dayjs from 'dayjs'
  import utc from 'dayjs/plugin/utc'
  import { page } from '$app/stores'

  /** @type {import('@prisma/client').Matchday[]} */
  const matchdays = $page.data.matchdays

  dayjs.extend(utc)
</script>

<section>
  {#each matchdays as { fmsId, date, number, city }}
    {@const utc = dayjs.utc(date)}
    <article>
      <h3>FMS {fmsId}</h3>
      <time datetime={utc.format('YYYY-MM-DD')}>
        {utc.locale('es').format('D MMMM')}
      </time>
      <p>{city} - Jornada {number}</p>
    </article>
  {/each}
</section>

<style>
  section {
    border-bottom: 1px solid rgb(var(--color-300));
    display: grid;
    gap: 2.8rem;
    padding-block: 2.8rem 4rem;
  }

  article {
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

  @media (min-width: 768px) {
    section {
      padding-block: 4rem 5.2rem;
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
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 640px) and (max-width: 1023px) {
    section {
      grid-template-columns: repeat(2, 1fr);
    }

    article:first-child {
      grid-column-end: span 2;
    }
  }
</style>
