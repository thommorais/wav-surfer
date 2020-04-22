<script>
    export let onChange;
</script>

<div class="w-full mt-4">
    <button on:click={onChange} class="overflow-hidden block relative mx-auto border-0">
        <label class="text-logincolor hover:text-gray-500 py-3 px-4 w-full inline-flex items-center justify-center cursor-pointer text-white">
            <svg class="pointer-events-none fill-current" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"/>
            </svg>
            <span class="ml-2 pointer-events-none text-white">adicionar arquivos</span>
        </label>
    </button>
</div>