<script>
  /** @type {number} */
  export let pages
  /** @type {number} */
  export let currentPage
  /** @type {(page: number) => void} */
  export let goToPage
</script>

<ol>
  {#each Array.from({ length: pages }) as _, index}
    {@const page = index + 1}
    <li>
      <button
        class:active={page === currentPage}
        on:click={() => goToPage(page)}
      />
    </li>
  {:else}
    <li><span /></li>
    <li><span /></li>
    <li><span /></li>
  {/each}
</ol>

<style>
  ol {
    align-items: center;
    display: flex;
    gap: 0.8rem;
    justify-content: center;
    list-style: none;
    margin-top: 1.2rem;
  }

  button,
  span {
    background-color: rgb(var(--color-300));
    border-radius: 50%;
    display: inline-block;
    height: 1rem;
    width: 1rem;
  }

  span {
    animation: pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  li:first-child span {
    animation-duration: 1.5s;
  }

  li:last-child span {
    animation-duration: 2s;
  }

  button {
    cursor: pointer;
    transition: background-color 150ms ease-out;
  }

  button:hover {
    background-color: rgba(var(--color-200), 0.4);
  }

  button.active {
    background-color: rgb(var(--color-200));
  }

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.25;
    }
  }
</style>
