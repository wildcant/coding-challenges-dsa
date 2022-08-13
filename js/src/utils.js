function Logger() {
  this.log = function (message) {
    console.log('\x1b[36m%s\x1b[0m', message)
  }
}

let logger
if (!logger) {
  logger = new Logger()
}

export default logger
