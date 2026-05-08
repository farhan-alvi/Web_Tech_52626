<?php

require_once "../controller/bookController.php";




if(isset($_POST['action']) && $_POST['action'] == "add"){

    $title = $_POST['title'];
    $author = $_POST['author'];
    $category = $_POST['category'];
    $status = $_POST['status'];

    addBookController($title, $author, $category, $status);

}




if(isset($_GET['action']) && $_GET['action'] == "show"){

    $result = showBooksController();

    while($row = mysqli_fetch_assoc($result)){

        echo "

        <tr>

            <td>".$row['id']."</td>

            <td>".$row['title']."</td>

            <td>".$row['author']."</td>

            <td>".$row['category']."</td>

            <td>".$row['status']."</td>

            <td>

                <button onclick='deleteBook(".$row['id'].")'>

                Delete

                </button>

            </td>

        </tr>

        ";
    }

}




if(isset($_POST['action']) && $_POST['action'] == "delete"){

    $id = $_POST['id'];

    removeBookController($id);

}

?>