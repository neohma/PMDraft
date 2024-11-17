// script.js
window.onload = function () {
    var headerContent = `
      <header>
        <h1>SilkSerenity</h1>
        <nav>
          <ul class="menu">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="gallery.html">Gallery</a></li>
            <li><a href="service.html">Service</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="review.html">Review</a></li>
          </ul>
        </nav>
        <div class="account-icon">Account</div>
      </header>
    `;
    document.getElementById("header-placeholder").innerHTML = headerContent;
  };
  