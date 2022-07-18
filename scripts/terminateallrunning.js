fetch('/api/vm/running')
  .then(r => r.json())
  .then(vms =>
    vms.forEach(vm =>
      fetch('/api/vm/terminate', {
        method: 'POST',
        body: JSON.stringify({ code: vm.roomId }),
        headers: {
          'csrf-token': csrfToken,
          'Content-Type': 'application/json'
        }
      })
    )
  )
