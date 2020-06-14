import fetch from 'node-fetch'

const cache = {}

const request = async (uri, method = 'GET', body) => {
  const isGet = (method === 'GET')
  const url = uri.join('/')
  let data

  if (isGet && cache[url]) {
    return cache[url]
  }

  console.log(`fetchResource: ${url}`)

  const resource = await fetch(url, {
    method,
    body: body ? JSON.stringify(body) : null,
    headers: { 'Content-Type': 'application/json' }
  })

  if (!resource.ok) {
    throw new Error(resource.statusText)
  }

  data = await resource.json()

  if (isGet) {
    cache[url] = data
  }

  return data
}

export default request
