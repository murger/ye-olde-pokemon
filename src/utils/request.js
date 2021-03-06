import { API_HOST } from '../constants'

const request = async (uri, method = 'GET', body) => {
  const url = [API_HOST, ...uri].join('/')
  const resource = await fetch(url, {
    method,
    body: body ? JSON.stringify(body) : null,
    headers: { 'Content-Type': 'application/json' }
  })

  if (!resource.ok) {
    throw new Error(resource.statusText)
  }

  return await resource.json()
}

export default request
