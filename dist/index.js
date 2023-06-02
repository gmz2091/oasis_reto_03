"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var data_json_1 = __importDefault(require("./data.json"));
function renderTableComparison(data) {
    var container = document.getElementById('container');
    var table = document.createElement('table');
    var headerRow = document.createElement('tr');
    var header1 = document.createElement('th');
    header1.textContent = 'Institucion Financiera';
    var header2 = document.createElement('th');
    header2.textContent = 'Instrumento';
    headerRow.appendChild(header1);
    headerRow.appendChild(header2);
    table.appendChild(headerRow);
    data.forEach(function (item) {
        var row = document.createElement('tr');
        var cell1 = document.createElement('td');
        cell1.textContent = item.institucionFinanciera;
        var cell2 = document.createElement('td');
        cell2.textContent = item.instrumento[0].debito;
        row.appendChild(cell1);
        row.appendChild(cell2);
        table.appendChild(row);
    });
    container.appendChild(table);
}
renderTableComparison(data_json_1.default);
console.log(data_json_1.default);
//# sourceMappingURL=index.js.map