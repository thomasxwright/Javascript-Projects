function spiralize (n) {
  
  let spiral = new Grid(n)
  
  
  
}


class Grid {
  constructor (size) {
    this._size = size
    this._grid = new Array(size).fill(Array(size).fill(0))
    this._direction = 'r'
    this._row = 1
    this._column = 0
  }
  
  get size() {
    return this._size
  }
  get row() {
    return this._row
  }
  get column() {
    return this._column
  }
  get grid() {
    return this._grid
  }
  get direction() {
    return this._direction
  }
  
  nextCellInThisDirection(row, column) {
    switch (this._direction) {
        case 'r':
         if (column === this._size - 1)
           return null
         return [row, column + 1]
        case 'd':
         if (row === this._size - 1)
           return null
         return [row + 1, column]
        case 'l':
         if (column === 0)
           return null
         return [row, column - 1]
        case 'u':
         if (row === 0)
           return null
         return [row - 1, column]
    }
  }
  
  updateDirection() {
    
    let next1 = nextCellInThisDirection(this._row, this._column)
    let [nextRow2, nextColumn2] = next1 && nextCellInThisDirection(nextRow1, nextColumn1)
    switch (this._direction) {
        case 'r':
         if (this._column === this._size - 2 || this._grid[this._row][this.column + 1] === 0 && this._grid[this._row][this.column + 2] === 1)
           this._direction = 'd'
        break
        case 'd':
         if (this._row === this._size - 2 || this._grid[this._row + 1][this.column] === 0 && this._grid[this._row + 2][this.column] === 1)
           this._direction = 'l'
        break
        case 'l':
         if (this._column === 1 || this._grid[this._row][this.column - 1] === 0 && this._grid[this._row][this.column - 2] === 1)
           this._direction = 'u'
        break
        case 'u':
         if (this._row === 1 || this._grid[this._row - 1][this.column] === 0 && this._grid[this._row - 2][this.column] === 1)
           this._direction = 'r'
        break
    }
  }
}
