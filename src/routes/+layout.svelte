<script>
  import '@fontsource/plus-jakarta-sans/variable.css'
  import '@fontsource/plus-jakarta-sans/variable-italic.css'
  import '@unocss/reset/tailwind.css'
  import 'uno.css'
  import Header from './Header.svelte'
</script>

<Header />
<main class="flex-grow px-5 sm:px-8 md:px-10">
  <div class="max-w-6xl mx-auto">
    <slot />
  </div>
</main>
<footer class="px-5 py-4">
  <p class="text-center text-sm text-brand-200 font-medium">
    © 2023
    <a
      class="text-brand-100 underline-brand-200 underline-offset-1.5
        hover:underline"
      href="https://jhanca.site"
      target="_blank"
      rel="noreferrer"
    >
      Jhan Viloria.
    </a>
    Todos los derechos reservados.
  </p>
</footer>

<style>
  :root {
    color-scheme: dark;
  }

  :global(body) {
    -webkit-tap-highlight-color: transparent;
    font-family: 'Plus Jakarta SansVariable', sans-serif;
  }

  :global(.border-gradient) {
    border-block: 1px solid;
    border-image: linear-gradient(
        90deg,
        transparent,
        theme('colors.brand.300'),
        transparent
      )
      12;
  }
</style>
