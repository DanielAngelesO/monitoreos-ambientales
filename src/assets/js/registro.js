console.log("Test2")
function deleteRow(id)
{
document.getElementById(id).remove()
}

function childrenRow() {
  console.log('prueba hola');
  var table = document.getElementById("childTable");
  // GET TOTAL NUMBER OF ROWS 
  var x =table.rows.length;
  var id = "tbl"+x;
  var row = table.insertRow(x);
  row.id=id;
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  var cell6 = row.insertCell(5);
  cell1.outerHTML = `<th> ${x}</th>`;
  cell2.innerHTML = ' <input type="text" name="name" class="form-control" />';
  cell3.innerHTML = ' <input type="text" name="school" class="form-control" />';
  cell4.innerHTML = ' <input type="text" name="year" class="form-control" />';
  cell5.innerHTML = ' <input type="text" name="age" class="form-control" />';
  cell6.innerHTML = '  <input type="button" class="btn btn-block btn-default" id="addrow" onclick="deleteRow(\''+id+'\')" value="Delete" /> '; 
}
