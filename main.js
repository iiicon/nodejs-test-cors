myButton.addEventListener('click', () => {
  jQuery.ajax('http://localhost:8082/xxx', 'POST', 'a=1&b=2', (res)=>{
    console.log(res)
  },(e)=>{
    console.log(e)
  })
})

window.jQuery = function (nodeOrSelector) {
  var nodes = {}
  nodes.xxx = function() {}
  return nodes
}

window .jQuery.ajax = function(url, method, data, successFn, errorFn) {
  var xhr = new XMLHttpRequest()
  xhr.open(method, url, true)
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      console.log(`status is ${xhr.status}`)
      if (xhr.status >= 200 && xhr.status < 400) {
        successFn.call(undefined, xhr.responseText)
      }else {
        errorFn.call(undefined, xhr)
      }
    }
  }

  xhr.send()
}
