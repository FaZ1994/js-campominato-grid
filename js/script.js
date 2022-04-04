function renderGrid(cellsLength) {
    const columnsLength = Math.ceil(Math.sqrt(cellsLength), Math.sqrt(cellsLength));
    const rowsLength = columnsLength;
    
    // creo la griglia
    const grid = document.getElementById("grid");
    
    // genero array di numeri
    const numbers = [];
    for (let i = 0; i < cellsLength; i++) {
      numbers.push(i+1);
    }
  
    // mischio i numeri ottenuti
    numbers.sort(() => .5 - Math.random());
  
    const rows = [];

    // genero N row, N corrisponde a ROWS_LENGTH
    for (let rowIndex = 0; rowIndex < rowsLength; rowIndex++) {
      // creo l'elemmento row
      let row = document.createElement("div");
      row.className = "row";
      // const cells = renderCells(columnsLength, rowIndex); ordinamento progressivo
      const cells = renderCells(columnsLength, numbers); //ordinamento randomico
      row.append(...cells);
      rows.push(row);
    }
    
    grid.replaceChildren(...rows);
  }


  
  // function renderCells(columnsLength, rowIndex) { ordinamento progressivo
  function renderCells(columnsLength, numbers) { //ordinamento randomico
    const cells = [];
    for (let columnIndex = 0; columnIndex < columnsLength; columnIndex++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      // cell.innerText = (rowIndex * columnsLength) + columnIndex + 1; //ordinamento progressivo 
      cell.innerText = numbers.pop() //ordinamento randomico
      cell.addEventListener('click', function() {
        cell.style.backgroundColor = "#6495ed";
      })
      cells.push(cell);
    }
    return cells;
  }
  
  
  document.getElementById("generate").addEventListener("click", function() {
    const cellsLength = Number(document.getElementById('levels').value);
    renderGrid(cellsLength);
  });


  renderGrid(100);
  
  