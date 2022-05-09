function spiralize (n) {
      let grid = Array.from(Array(n), () => Array(n).fill(1))

      //we mark it one "layer" at a time, each layer is 2 rows
      for (let depth = 0; depth < n / 2; depth+= 2) {
        
        //Mark the top of a spiral
        for (let i = depth; i < n - depth - 1; i++) {
          grid[depth+1][i] = 0
        }
        //Right of the spiral
        for (let i = depth + 2; i < n - depth - 1; i++) {
          grid[i][n - depth - 2] = 0
        }
        //Bottom of the spiral
        for (let i = n - depth - 3; i > depth; i--) {
          grid[n - depth - 2][i] = 0
        }
        //Left side of the spiral
        for (let i = n - depth - 3; i > depth + 2; i--) {
          grid[i][depth + 1] = 0
        }
    }
    return grid
  }
