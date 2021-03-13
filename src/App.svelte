<script>
  import { onDestroy, afterUpdate } from 'svelte'
  import Tailwindcss from './Tailwindcss.svelte'
  import FileSelection from './FileSelection.svelte'
  import Logo from './Logo.svelte'
  import Queue from './Queue.svelte'

  // vars
  let queueArray
  let isAllDone
  let finishedQueue = false

  //store
  import { queue } from './stores'

  // functions
  import selectFiles from './backend/selectFiles'

  $: queueArray = []

  const unsubscribe = queue.subscribe(value => (queueArray = value))

  afterUpdate(() => {
    isAllDone = queueArray.filter(({ status }) => status === 'done')

    if (queueArray.length && isAllDone.length === queueArray.length) {
      finishedQueue = true
      queue.update(() => [])
      setTimeout(() => (finishedQueue = false), 2000)
    }
  })

  onDestroy(() => unsubscribe())
</script>

<style>
  .wrapper {
    margin: 0 auto;
    min-height: calc(100vh - 200px);
  }

  main {
    min-height: 100vh;
    width: 100%;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<Tailwindcss />
<main>
  <Logo />
  <div class="wrapper w-10/12 lg:w-6/12 px-2 sm:px-8 mt-12 flex items-center">
    {#if finishedQueue}
      <div class="success-checkmark py-10">
        <div class="check-icon">
          <span class="icon-line line-tip" />
          <span class="icon-line line-long" />
          <div class="icon-circle" />
          <div class="icon-fix" />
        </div>
      </div>
    {:else if !queueArray.length}
      <FileSelection onChange={selectFiles} />
    {:else}
      <Queue />
    {/if}
  </div>
</main>
