class FileMaster {
  constructor(filepath) {
    this._filepath = filepath
  }
  
  get filepath() {
    return this._filepath
  }
  
  extension() {
    const split = this.filepath.split('.')
    return split[split.length - 1]
  }
  
  filename() {
    const split = this.filepath.split('/')
    return split[split.length - 1].split('.')[0]
  }
  
  dirpath() {
    const split = this.filepath.split('/')
    split.pop()
    return `${split.join('/')}/`
  }
}

// https://www.codewars.com/kata/5844e0890d3bedc5c5000e54
