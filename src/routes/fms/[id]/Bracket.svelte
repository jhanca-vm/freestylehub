<script lang="ts">
  import { page } from '$app/stores'

  export let title: string
</script>

<section class="my-20 text-center tracking-wide md:my-28">
  <h2 class="font-bold text-2xl text-{$page.params.id} mb-6">{title}</h2>
  <div
    class="grid gap-y-16 pt-10 pb-12 rounded-3xl border border-{$page.params.id}
      border-x-brand-300 sm:grid-cols-2 lg:grid-cols-3"
  >
    <slot />
  </div>
</section>
