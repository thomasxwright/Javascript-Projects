function Event() {
  this.handlers = []
  this.subscribe = func => {
    this.handlers.push(func)
  }
  this.unsubscribe = func => {
    this.handlers = this.handlers.filter(handler => handler !== func)
  }
  this.emit = function() {
    for (handler of this.handlers) {
      handler(...arguments)
    }
  }
}
