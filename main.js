myButton.addEventListener('click', () => {
  var xhr = new XMLHttpRequest()
  xhr.open('GET', 'http://localhost:8082/xxx', true)
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      console.log(`status is ${xhr.status}`)
      if (xhr.status >= 200 && xhr.status < 400) {
        console.log(typeof xhr.responseText)
        console.log(xhr.responseText)
      }
    }
  }
  
  xhr.send()
})
