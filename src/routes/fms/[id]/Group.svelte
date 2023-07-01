<script>
  /**
   * @typedef {import('@prisma/client').Freestyler & {
   *   battleResults: { battleId: number, points: number, ptb: number }[]
   * }} Freestyler
   */

  import sortFreestylers from '$lib/utils/sortFreestylers'
  import sumResult from '$lib/utils/sumResult'

  /** @type {string} */
  export let name
  /** @type {Freestyler[]} */
  export let freestylers
</script>

<table>
  <thead>
    <tr>
      <th>Grupo {name}</th>
      <th>Batallas</th>
      <th>Puntos</th>
    </tr>
  </thead>
  <tbody>
    {#each sortFreestylers(freestylers) as { name, battleResults }}
      <tr>
        <td>{name}</td>
        <td>{battleResults.length} / 7</td>
        <td>{battleResults.reduce(sumResult('points'), 0)}</td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  table {
    margin-inline: auto;
    max-width: 48rem;
    width: 100%;
  }

  thead {
    color: rgb(var(--fms-color));
  }

  tbody tr:first-child {
    font-weight: bold;
  }

  tbody tr:nth-child(2),
  tbody tr:nth-child(3) {
    color: rgba(var(--color-100, 0.6));
  }

  tbody tr:nth-child(4),
  tbody tr:nth-child(5) {
    color: rgba(var(--color-200), 0.8);
  }

  tbody tr:last-child {
    color: rgba(var(--color-200), 0.52);
  }

  th,
  td {
    border-bottom: 1px solid rgb(var(--color-300));
    padding: 0.8rem 0.4rem 1.2rem;
  }

  th:first-child {
    font-size: 2rem;
    text-align: left;
  }

  td:not(:first-child) {
    text-align: center;
  }
</style>
