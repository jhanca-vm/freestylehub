<script>
  import Header from './Header.svelte'
  import Footer from './Footer.svelte'
</script>

<Header />
<main class="flex-grow px-5 sm:px-8 md:px-10">
  <div class="max-w-6xl mx-auto">
    <slot />
  </div>
</main>
<Footer />

<style>
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
