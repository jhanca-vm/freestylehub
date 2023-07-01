<script>
  import { page } from '$app/stores'
  import Group from './Group.svelte'

  export let data
</script>

<svelte:head>
  <title>FMS {data.name}</title>
  <meta
    name="description"
    content={`Obtén las últimas actualizaciones de la FMS ${data.name}. ` +
      'Descubre quiénes son los MCs que están luchando por consagrarse como ' +
      'campeones y aquellos que se enfrentan a la difícil tarea de evitar el ' +
      'descenso.'}
  />
</svelte:head>

<main class={$page.params.id}>
  <section class="groups">
    <Group
      name="A"
      freestylers={data.freestylers?.filter(({ group }) => group === 'A') || []}
    />
    <Group
      name="B"
      freestylers={data.freestylers?.filter(({ group }) => group === 'B') || []}
    />
  </section>
  <section>
    <h2>Jornada 5</h2>
    <p>Enfrentamiento de los grupos contra grupos de otras ligas.</p>
  </section>
  <section>
    <h2>Jornada 7</h2>
    <p>
      Enfrentamiento del Grupo A contra el Grupo B (las batallas se decidirán
      por sorteo).
    </p>
  </section>
  <section>
    <h2>Jornada 8</h2>
    <p>Se disputarán los playoff por semifinales y permanencia.</p>
  </section>
  <section>
    <h2>Jornada 9</h2>
    <p>
      Se define el campeón, clasificados a la FMS Inter, ascensos y descensos.
    </p>
  </section>
</main>

<style>
  main {
    letter-spacing: 0.025em;
  }

  h2 {
    color: rgb(var(--fms-color));
    font-size: 2.4rem;
  }

  section:not(.groups) {
    line-height: 1.75;
    margin-block: 6rem;
  }

  section:last-child {
    margin-bottom: 8rem;
  }

  .groups {
    display: grid;
    margin-top: 3.2rem;
    gap: 5.6rem;
  }

  @media (min-width: 768px) {
    .groups {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>
