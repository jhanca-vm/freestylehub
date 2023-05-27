<script lang="ts">
  import { toast } from 'svoast'
  import type { ActionData } from './$types'

  export let form: ActionData

  if (form?.missing) toast.warning('Ingrese usuario y contraseña')
  if (form?.incorrect) toast.error('Acceso denegado')
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
    <label>
      Usuario
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
  </form>
</main>
