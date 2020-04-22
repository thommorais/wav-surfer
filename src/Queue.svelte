<script>
    // components
    import QueueItem from './QueueItem.svelte'
    //store
    import { queue } from './stores'

    // functions
    import selectFiles from './backend/selectFiles'

    let queueArray = []
    const unsubscribe = queue.subscribe(value => ( queueArray = value));

    function startQueue(){
        queue.update(state => [...state].map((item, index) => {
            if (index === 0) {
                item.status = 'current'
            }
            return item
        }))
    }

    function clearQueue(){
        queue.update(() => [])
    }

</script>
<div class="my-6 mb-2 w-full lg:w-6/12 ">
    <ul class="songs-lists relative left-0 py-4">
        {#if queueArray.length}
            {#each queueArray as queue}
                <QueueItem item={queue} />
            {/each}
        {/if}
    </ul>
    <div class="flex justify-center items-center px-12 mt-4">
        <button  on:click|once={startQueue} type="button" class="text-white flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-lg focus:outline-none focus:shadow-outline transition ease-in-out duration-150 mr-4 bg-green-500 hover:bg-green-700">
            iniciar
        </button>
        <button on:click|once={clearQueue} type="button" class="flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-lg text-gray-900 hover:text-gray-600 focus:outline-none focus:shadow-outline transition ease-in-out duration-150 bg-white" >
            clear
        </button>
    </div>
</div>