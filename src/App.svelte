<script>
	import Tailwindcss from './Tailwindcss.svelte'

	function selectFiles() {
		console.log('teste')
	}


</script>


<Tailwindcss />
<main>
		<span class="logo">
			<svg width="60px" height="44px"><use xlinkHref="#fuerza-icon" /></svg>
		</span>
	<div class="wrapper w-10/12 lg:w-6/12 px-2 sm:px-8 mt-12 flex items-center">

		<div class="w-full mt-4">
            <div class="overflow-hidden relative">
                <label for="files" class="text-logincolor hover:text-gray-500 py-3 px-4 w-full inline-flex items-center justify-center cursor-pointer">
                    <svg class="pointer-events-none fill-current" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"/>
                    </svg>
                    <span class="ml-2 pointer-events-none">
						adicionar arquivos
					</span>
                </label>
            </div>
		</div>
	</div>

  <svg class="hidden">
    <symbol id="fuerza-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 499.5 539">
      <style>
        .st0 {
          fill: none;
          stroke-width: 15;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-miterlimit: 10;
        }
      </style>
      <path class="st0" d="M334 531.5L284 355 7.5 225.5l93 176z" />
      <path class="st0" d="M212.5 7.5l265 110L284 355 7.5 225.5z" />
      <path class="st0" d="M492 291l-14.5-173.5L284 355l50 176.5z" />
      <path class="st0" d="M7.5 225.5l378.5 4.3-270.9-118.7 362.4 6.4-165.8 335.4 173.9-239L334 531.5" />
      <path class="st0" d="M284 355L59.8 324.5l251.9 128.4-211.2-51.4" />
    </symbol>
  </svg>

</main>

<style>
	.wrapper{
		margin: 0 auto;
		min-height: calc(100vh - 200px)
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