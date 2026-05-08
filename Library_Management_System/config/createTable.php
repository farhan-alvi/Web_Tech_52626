<?php

require_once "db.php";

$sql = "CREATE TABLE IF NOT EXISTS books (

    id INT AUTO_INCREMENT PRIMARY KEY,

    title VARCHAR(100),

    author VARCHAR(100),

    category VARCHAR(100),

    status VARCHAR(50)

)";


if(mysqli_query($conn, $sql)){

    echo "Table Created Successfully";

}
else{

    echo "Error Creating Table";

}

?>