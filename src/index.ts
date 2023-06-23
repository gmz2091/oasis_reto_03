function renderTableComparison() {
    fetch('./src/data.json')
        .then((res) => res.json())
        .then((res) => {
            const container: any = document.getElementById('container');
    
            const table = document.createElement('table');
            
            const headerRow = document.createElement('tr');
            const header1 = document.createElement('th');
            header1.textContent = 'Institucion Financiera';
            const header2 = document.createElement('th');
            
            header2.textContent = 'Instrumento';
            headerRow.appendChild(header1);
            headerRow.appendChild(header2);
            table.appendChild(headerRow);

            res.forEach((item: any) => {
            const row = document.createElement('tr');
            const cell1 = document.createElement('td');
            cell1.textContent = item.institucionFinanciera;
            const cell2 = document.createElement('td');
            cell2.textContent = item.instrumento[0].debito;
            row.appendChild(cell1);
            row.appendChild(cell2);
            table.appendChild(row);
            });

            if (res.length === 0) {
                const row = document.createElement('tr');
                const cell = document.createElement('td');
                cell.textContent = 'No se encontraron resultados';
                row.appendChild(cell);
                table.appendChild(row);
            }

            container.appendChild(table);
          })
        .catch((err) => {
            console.log(err);
        }
    );

    
        
}

renderTableComparison();