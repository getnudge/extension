
document.addEventListener("DOMContentLoaded", function () {
     window.alert("loaded")
   var sentry = true
       // Fetch all the content on the page
    // console.log(document.body.innerText)
  // this.window.alert("conversation")
  if (window.location.href.split("/watch")[0] == "https://www.youtube.com") {
    window.alert("first test passed")
    setInterval(() => {   
      if (sentry) {
      try { 
        if (document.getElementsByClassName('title style-scope ytd-video-primary-info-renderer')) {
           window.alert("This youtube video is about" + document.getElementsByClassName('title style-scope ytd-video-primary-info-renderer')[0].innerText)
            sentry = false;
          } else {
          window.alert("no luck")
        }
      
    
    } catch(err) {
        console.log(err);
      }
    }
    }, 1000);

  } else {
    window.alert("test failed ")
  }
  var susDomains = ["https://www.reddit.com/", "https://youtube.com"];
  //this.window.alert(this.window.location.href)
  //this.window.alert(susDomains.includes(this.window.location.href))

  if (susDomains.includes(this.window.location.href)) {
      // this.document.write("Blocked");
      // this.window.alert("Violation detected")
      this.document.write(`
          
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>👀</title>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
        </head>
        <body>
        <section class="hero is-light is-fullheight">
        <div class="hero-body">
          <div class="">
            <p class="title">
              You've got this Pranav!
            </p>
            <p class="subtitle">
              You have NULL till your next break.
            </p>
            <button>Get back to work</button> <button>Dismiss</button>

            <p class="mt-6">&copy; Nudge 2022</p>
          </div>
        </div>
      </section>
        </body>
      </html>
      
      `)
  } else {
      // this.window.alert("Violation not detected")
  }



  });
