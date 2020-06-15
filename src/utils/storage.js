const storage = {
  isSupported: () => 'localStorage' in window,
  remove: (key) => localStorage.removeItem(key),
  set: (key, value) => localStorage.setItem(key, value),
  get: (key) => localStorage.getItem(key),
  has: (key) => !!localStorage.getItem(key),
  all: () => Object.keys(localStorage),
}

export default storage
