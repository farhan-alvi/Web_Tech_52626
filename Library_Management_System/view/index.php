<!DOCTYPE html>
<html>

<head>

<title>Library Management System</title>

<style>

body{
    font-family: Arial;
    padding: 20px;
}

input{
    padding: 8px;
    margin: 5px;
}

button{
    padding: 8px;
}

table{
    border-collapse: collapse;
    width: 100%;
    margin-top: 20px;
}

table, th, td{
    border: 1px solid black;
    padding: 10px;
}

</style>

</head>

<body>

<h2>Library Management System</h2>

<input type="text" id="title" placeholder="Book Title">

<input type="text" id="author" placeholder="Author">

<input type="text" id="category" placeholder="Category">

<input type="text" id="status" placeholder="Availability">

<button onclick="addBook()">Add Book</button>



<table>

<thead>

<tr>

<th>ID</th>
<th>Title</th>
<th>Author</th>
<th>Category</th>
<th>Status</th>
<th>Action</th>

</tr>

</thead>

<tbody id="bookData">

</tbody>

</table>



<script>




function loadBooks(){

fetch("../ajax/handler.php?action=show")

.then(response => response.text())

.then(data => {

document.getElementById("bookData").innerHTML = data;

});

}




function addBook(){

let title = document.getElementById("title").value;

let author = document.getElementById("author").value;

let category = document.getElementById("category").value;

let status = document.getElementById("status").value;



let formData = new FormData();

formData.append("action", "add");

formData.append("title", title);

formData.append("author", author);

formData.append("category", category);

formData.append("status", status);



fetch("../ajax/handler.php", {

method: "POST",

body: formData

})

.then(response => response.text())

.then(data => {

loadBooks();

});

}




function deleteBook(id){

let formData = new FormData();

formData.append("action", "delete");

formData.append("id", id);



fetch("../ajax/handler.php", {

method: "POST",

body: formData

})

.then(response => response.text())

.then(data => {

loadBooks();

});

}




loadBooks();

</script>

</body>
</html>