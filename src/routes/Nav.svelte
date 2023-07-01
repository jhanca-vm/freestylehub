<script>
  import { LEAGUES } from '$lib/constants'
</script>

<nav>
  <ul>
    {#each LEAGUES as [id, name]}
      <li>
        <a class={id} href={`/fms/${id}`}>FMS {name}</a>
      </li>
    {/each}
  </ul>
</nav>

<style>
  nav {
    margin-block: 4rem 6rem;
    text-align: center;
  }

  ul {
    display: grid;
    gap: 2.4rem 2rem;
    grid-template-columns: repeat(2, 1fr);
    list-style: none;
  }

  a {
    background: radial-gradient(
      circle,
      rgb(var(--fms-color)) 24%,
      rgba(var(--fms-color), 0.4)
    );
    border-radius: 1.6rem 0.4rem 1.6rem 0.4rem;
    display: block;
    font-weight: bold;
    opacity: 0.8;
    padding: 0.8rem 0.8rem 1rem;
    transition: opacity transform 150ms ease-out;
  }

  a:not(.spain, .peru) {
    color: rgb(var(--color-400));
  }

  a:hover {
    opacity: 1;
    transform: scale(1.04);
  }

  @media (min-width: 640px) {
    ul {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 768px) {
    nav {
      font-size: 1.8rem;
      margin-top: 5.2rem;
    }

    ul {
      gap: 2.4rem;
    }
  }

  @media (min-width: 1024px) {
    ul {
      gap: 3.2rem;
      grid-template-columns: repeat(4, 1fr);
    }
  }
</style>
