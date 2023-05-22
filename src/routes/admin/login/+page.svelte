<script lang="ts">
  import type { ActionData } from './$types'

  export let form: ActionData
</script>

<svelte:head>
  <title>Admin - Iniciar sesión</title>
</svelte:head>

<main class="min-h-screen grid place-items-center">
  <form
    class="mb-20 [&_input]:(block w-72 mt-2 mb-4 p-2 text-brand-100 rounded-md)
      [&_input:focus]:(outline outline-2 outline-current)"
    method="POST"
  >
    <label class:text-red={form?.missing}>
      Usuario{#if form?.missing}*{/if}
      <input type="text" name="username" />
    </label>
    <label>
      Contraseña
      <input type="password" name="password" />
    </label>
    <button
      class="w-full bg-brand-200 text-brand-500 py-2 mt-1 font-semibold
        rounded-md transition hover:bg-brand-100"
    >
      Iniciar sesión
    </button>
    {#if form?.incorrect}
      <p class="text-red text-sm text-right font-medium italic mt-4">
        - Acceso denegado -
      </p>
    {/if}
  </form>
</main>
