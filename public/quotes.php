<?php
  session_start(); 
  $_SESSION['page'] = "quotes";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <?php include_once("./../includes/linksandshit.php") ?>
    <title>Scheidlyisms</title>
</head>
<body>
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <?php include_once("./../includes/nav.php") ?> 
        <div class="card">
            <div class="title">
                Example quote that Ben is writing!
            </div>
            <div class="body">
            "This is the actual quote" - Ben Lubas
            <div class="context"> Jake was like, hey ben, work on this, and I was like, okay. </div>
            <div class="cont">
                <div class="toggle">Context</div>
                <div class="date">today jr.</div>
            </div>
            </div>
        </div>

        <?php include_once("./../includes/footer.php") ?> 
    </div>
</body>
<script>
    $(document).ready(function() {
        $('.toggle').click(function() {
            $(this).parent().siblings('.context').toggle(); 
        })

    });

</script>
</html>