<header class="masthead">
  <div class="inner text-shadow">
    <h3 class="masthead-brand">Scheidly's Tattoo Shop</h3>
    <nav class="nav nav-masthead justify-content-center">
      <a class="nav-link <?php if($_SESSION['page']=="home"){echo "active";} ?>" href="./index.php">Home</a>
      <a class="nav-link <?php if($_SESSION['page']=="quotes"){echo "active";} ?>" href="./quotes.php">Scheidly-isms</a>
      <a class="nav-link <?php if($_SESSION['page']=="tattoo"){echo "active";} ?>" href="./tattoo.php">Tattoo things</a>
    </nav>
  </div>
</header>