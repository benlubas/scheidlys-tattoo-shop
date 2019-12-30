<?php
  session_start(); 
  $_SESSION['page'] = "tattoo";
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <?php include_once("./../includes/linksandshit.php"); ?>
  <title>Tattoo Shop</title>
</head>
<body>
  <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <?php include_once("./../includes/nav.php"); ?> 

    <?php include_once("./../includes/footer.php"); ?>
  </div>
</body>
</html>