<?php
  session_start(); 
  $_SESSION['page'] = "home";
?>
<html>
<head>
  <title>Scheidly Tattoo</title>
  <!-- All of the bootstrap things and the main style sheet -->
  <?php include_once('./../includes/linksandshit.php') ?>
</head>
<body>
  <div id='root' class="p-3 mx-auto ">
    <?php include_once('./../includes/nav.php'); ?>
    <main>
      <h3 class='title'>Welcome to Scheidly's Tattoo Shop!</h3> 
      <p>
        This is a website dedicated to that really tall intimidating Physics teacher called Scheidly. 
      </p>
      <p>
        His board skills are unmatched. The man drew three identical circles for crying out loud. 
      </p>
      <p>
        But perhaps more legendary, are his stories. And some of the shit that comes out of this mans mouth.
      </p>
    </main>
    
    <?php include_once("./../includes/footer.php"); ?> 
  </div>

</body>
</html>
