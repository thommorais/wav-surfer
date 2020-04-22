<script>
    import { afterUpdate } from 'svelte'
    import saveWaveform, {convertSongToBuffer} from './backend/waveform'
    import convertToMp3 from './backend/convertToMp3'
    import drawAudio from './helpers/waveform'

    //store
    import { queue } from './stores'

    let progressBar;

    // props
    export let item = {}
    $: song = item.song
    $: name = item.name
    $: status = item.status

    function err(error) {
        console.error({ error })
    }

    function updateStatus(status){
      queue.update(state => [...state].map((item) => {
        if (item.song === song) {
          item.status = status
        }
        return item
      }))
    }

    function handleProgress(value){
        progressBar.style.setProperty('--progress', value / 100)
        queue.update(state => [...state].map((item) => {
            if (item.song === song) {
                item.progress = status
            }
            return item
        }))

      if(value === 100){
         updateStatus('done')

         queue.update(state => {

            const nextItem = [...state].find(({ status }) => status === 'waiting')
            if (!nextItem) {
                return state
            }
            const qs = [...state].filter(({song}) => song !== nextItem.song)
            return  [...qs, {...nextItem, status: 'current'}]
        })
      }

    }

    // life cicles
    afterUpdate(() => {

        if (status === 'current') {
            requestIdleCallback(async () => {
                const buff = await convertSongToBuffer(song)
                const wave = await drawAudio(buff)
                saveWaveform(song, JSON.stringify(wave))
            })

            requestIdleCallback(async () => {
                updateStatus('processing')
                convertToMp3({ file: song, onProgress: handleProgress, err })
            })

        }
	});


</script>

<li class="relative py-3 text-sm leading-5">
    <div class="flex justify-between items-center">
        <span class="text-white text-xs opacity-25 capitalize">
            {name.replace(/[[\]-]+/g, ' ')}
        </span>
    </div>
    <div class="progressbar w-full" bind:this={progressBar} />
</li>