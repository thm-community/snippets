const targetRoom = 'linuxctf' // Change this to the sub-only roomcode
fetch('/room/leave', {
    method: 'POST',
    body: JSON.stringify({
        code: targetRoom,
        _csrf: csrfToken
    }),
    headers: {
        'Content-Type': 'application/json'
    }
})