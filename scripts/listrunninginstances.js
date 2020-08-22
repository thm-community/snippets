fetch('/api/running-instances')
  .then(r=>r.json())
  .then(vms => 
    vms.forEach(vm => 
      console.log(`https://tryhackme.com/room/${vm.roomId} - ${vm.internalIP}`)
    )
  )