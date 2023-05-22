<script>
  import { page } from '$app/stores'
  import { FMS } from '$lib/constants'
  import IconMenu from '$lib/icons/IconMenu.svelte'
  import IconX from '$lib/icons/IconX.svelte'

  let menuIsHidden = true

  const hideMenu = () => {
    if (!menuIsHidden) menuIsHidden = true
  }
</script>

<header class="px-5 relative sm:px-8 md:px-10">
  <nav class="flex items-center justify-between max-w-6xl mx-auto">
    <a
      class="w-12 h-12 grid place-items-center bg-brand-400/30 rounded-b-full
        shadow-md md:(w-16 h-16)"
      href="/"
      on:click={hideMenu}
    >
      <img
        class="w-5 md:w-7"
        src="/logo.webp"
        alt="FreestyleHub"
        width="32"
        height="32"
      />
    </a>
    <ul
      class="absolute top-full inset-x-0 text-center pb-6 bg-gradient-to-b
        from-brand-500 from-96% lg:(static flex gap-x-12 pb-0)"
      class:hidden={menuIsHidden}
    >
      {#each FMS as [id, name]}
        <li class="font-semibold tracking-wide my-6 lg:m-0">
          <a
            class={$page.params.id === id
              ? `text-${id}`
              : 'transition text-brand-200 hover:text-brand-100'}
            href={`/fms/${id}`}
            on:click={hideMenu}
          >
            {name}
          </a>
        </li>
      {/each}
    </ul>
    <button
      class="w-7 rounded-lg lg:hidden"
      on:click={() => (menuIsHidden = !menuIsHidden)}
    >
      {#if menuIsHidden}
        <IconMenu />
      {:else}
        <IconX />
      {/if}
    </button>
  </nav>
</header>
