<script>
  import '@fontsource/lato/400.css'
  import '@fontsource/lato/700.css'
  import '../app.css'
</script>

<header>
  <a href="/">
    <img src="/logo.svg" alt="" width="17" height="23" />
    FreestyleHub
  </a>
</header>
<slot />
<footer>© 2023 Jhan Viloria</footer>

<style>
  header,
  footer {
    margin-inline: auto;
    max-width: 112rem;
    width: calc(100% - 4.8rem);
  }

  header {
    border-bottom: 1px solid rgb(var(--color-300));
    display: flex;
    justify-content: center;
    padding: 2rem 2.4rem 2.4rem;
  }

  a {
    align-items: center;
    color: rgb(var(--color-200));
    column-gap: 0.8rem;
    display: flex;
    font-size: 1.8rem;
    font-weight: bold;
  }

  img {
    width: 1.8rem;
  }

  footer {
    border-top: 1px solid rgb(var(--color-300));
    font-size: 1.4rem;
    opacity: 0.6;
    padding: 1.6rem 2.4rem 2rem;
    text-align: center;
  }

  @media (min-width: 640px) {
    header,
    footer {
      width: calc(100% - 8rem);
    }
  }

  @media (min-width: 768px) {
    header {
      padding-block: 2.4rem 2.8rem;
    }
  }
</style>
