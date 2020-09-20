const TWO_MINUTES_IN_MILLISECONDS = 2 * 60 * 1000

class MemoryCache {
  constructor({ defaultTTL = TWO_MINUTES_IN_MILLISECONDS } = {}) {
    this.database = {}
    this.defaultTTL = defaultTTL
    this.timeouts = {}
  }

  get(key) {
    return this.database[key] || null
  }

  put(key, data, ttl = this.defaultTTL) {
    this.database[key] = data

    this._clearPreviousTimeout(key)
    this._scheduleClear(key, ttl)

    return data
  }

  _clearPreviousTimeout(key) {
    if (this.get(key)) {
      const lastTimeoutId = this.timeouts[key]
      if (lastTimeoutId) clearTimeout(lastTimeoutId)
    }
  }

  _scheduleClear(key, ttl) {
    this.timeouts[key] = setTimeout(() => {
      delete this.database[key]
    }, ttl)
  }
}

module.exports = MemoryCache
