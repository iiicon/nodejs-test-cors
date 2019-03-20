myButton.addEventListener('click', () => {
  var result = jQuery.ajax({
    url: 'http://localhost:8082/xxx',
    method: 'POST',
    data: 'a=1&b=2'
  }).then((res)=>{
    console.log(res)
    console.log(result)
  },(e)=>{
    console.log(e)
  })
})

window.jQuery = function(nodeOrSelector) {
  var nodes = {}
  nodes.xxx = function() {}
  return nodes
}

window.jQuery.ajax = function({ url, method, data }) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest()
    xhr.open(method, url, true)
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        console.log(`status is ${xhr.status}`)
        if (xhr.status >= 200 && xhr.status < 400) {
          resolve.call(undefined, xhr.responseText)
        } else {
          reject.call(undefined, xhr)
        }
      }
    }
    xhr.send(data)
  })
}
