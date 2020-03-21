    function promisesWithProgress(promises, onProgress) {
      let counter = 0
      promises.forEach(async promise => {
          await promise
          if (onProgress && onProgress instanceof Function) {
              onProgress(++counter / promises.length)
          }
      })
      return Promise.all(promises)
  }