<?php

require_once "../model/bookModel.php";




function addBookController($title, $author, $category, $status){

    return insertBook($title, $author, $category, $status);

}




function showBooksController(){

    return getBooks();

}




function removeBookController($id){

    return deleteBook($id);

}

?>