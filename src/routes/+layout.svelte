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
    font-family: 'Plus Jakarta SansVariable', sans-serif;
  }
</style>
