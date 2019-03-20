myButton.addEventListener('click', () => {
  jQuery.ajax({
    url: 'http://localhost:8082/xxx',
    method: 'POST',
    data: 'a=1&b=2',
    successFn: res => {
      console.log(res)
    },
    errorFn: () => {}
  })
})

window.jQuery = function(nodeOrSelector) {
  var nodes = {}
  nodes.xxx = function() {}
  return nodes
}

window.jQuery.ajax = function(options) {
  let url = ''
  if (arguments.length === 1) {
    url = options.url
  } else {
    url = arguments[0]
    options = arguments[1]
  }
  let method = options.method
  let data = options.data
  let successFn = options.successFn
  let errorFn = options.errorFn

  var xhr = new XMLHttpRequest()
  xhr.open(method, url, true)
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      console.log(`status is ${xhr.status}`)
      if (xhr.status >= 200 && xhr.status < 400) {
        successFn.call(undefined, xhr.responseText)
      } else {
        errorFn.call(undefined, xhr)
      }
    }
  }

  xhr.send(data)
}
