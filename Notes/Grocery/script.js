var items = [
    { name: 'Apples', price: 52.25 },
    { name: 'Bananas', price: 30.50 },
    { name: 'Milk', price: 25.75 },
    { name: 'Bread', price: 70.00 },
    { name: 'Eggs', price: 46.50 }
];

var total = 0;
var table = document.getElementById('groceryList');

items.forEach(function(item) {
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = item.name;
    cell2.innerHTML = '$' + item.price.toFixed(2);
    cell3.innerHTML = '<span class="delete">Delete</span>';

    total += item.price;

    cell3.onclick = function() {
        var i = row.rowIndex;
        table.deleteRow(i);
        total -= item.price;
        document.getElementById('total').innerHTML = total.toFixed(2);
    }
});

document.getElementById('total').innerHTML = total.toFixed(2);
