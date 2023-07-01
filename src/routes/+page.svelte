<script>
  import Nav from './Nav.svelte'
  import Schedule from './Schedule.svelte'
</script>

<svelte:head>
  <title>FreestyleHub</title>
  <meta
    name="description"
    content={'No te pierdas ningún detalle de las batallas, jornadas y ' +
      'clasificación de todas las FMS de Urban Roosters.'}
  />
</svelte:head>

<main>
  <Schedule />
  <Nav />
</main>
