<script>
  import '@fontsource/plus-jakarta-sans/variable.css'
  import '@fontsource/plus-jakarta-sans/variable-italic.css'
  import '@unocss/reset/tailwind.css'
  import 'uno.css'
</script>

<slot />

<style>
  :root {
    color-scheme: dark;
  }

  :global(body) {
    -webkit-tap-highlight-color: transparent;
    background: linear-gradient(
      theme('colors.brand.500'),
      theme('colors.brand.450')
    );
    color: theme('colors.brand.100');
    display: flex;
    flex-direction: column;
    font-family: 'Plus Jakarta SansVariable', sans-serif;
    min-height: 100vh;
    min-width: 360px;
  }
</style>
