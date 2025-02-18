<?php
    $dsn = "mysql:host=localhost;charset=utf8;dbname=db22";
    $conn = new PDO($dsn, "admin", "1234");
    $sql = "INSERT INTO `tickets` (`firstname`, `lastname`, `phone`, `password`) 
            VALUES ('{$_POST['firstname']}', '{$_POST['lastname']}', '{$_POST['phone']}', '{$_POST['password']}')";
    $result = $conn->exec($sql);
    echo $result > 0 ? "成功" : "失敗";
?>