# [Part 1 Website](https://mkuehn10.github.io/portfolio/optimize/)

# Using Grunt to automate
* Create a basic package.json file with the following:

<pre>{
  "name": "website-optimization",
  "version": "0.1.0",
  "devDependencies": {
    "grunt": "~0.4.1",
    "grunt-contrib-cssmin": "^1.0.1",
    "grunt-contrib-htmlmin": "^1.4.0",
    "grunt-contrib-imagemin": "^1.0.1",
    "grunt-purifycss": "^0.1.1",
    "grunt-responsive-images": "^0.1.9"
  }
}</pre>

* Run `npm install` inside the directory.
* Install cssmin with `npm install grunt-contrib-cssmin --save-dev`
* Install purifycss with `npm install grunt-purifycss --save-dev`
* Install htmlmin with `npm install grunt-contrib-htmlmin --save-dev`
* Install responsive-images with `npm install grunt-responsive-images --save-dev`
* Install imagemin with `npm install grunt-contrib-imagemin --save-dev`
* See `Gruntfile.js` for setup for each task.
* Run `grunt` to run the Grunt script.

# Steps taken to optimize `index.html`
* Add `media="print"` to the `css/print.css` link
* Remove the link to the Open Sans font (not needed)
* Resize `pizzeria.jpg` to a width of 100 and compress all images using grunt-contrib-imagemin
* Purify css to ensure that there is no unneeded css
* Minify css files using grunt-contrib-cssmin
* Clean up `style.css` (several body selectors combined)
* Add inline css and defer loading the rest of the css
* Use htmlmin to minify HTML

# [Part 2 Website](https://mkuehn10.github.io/portfolio/optimize/views/pizza.html)

## Frame Rate
The `updatePositions` function was updated to read the document's scrollTop property
fewer times.  This was causing the animation to update in very quick succession for no reason.
Guidance on [avoiding layout thrashing](https://developers.google.com/web/fundamentals/performance/rendering/avoid-large-complex-layouts-and-layout-thrashing#avoid-layout-thrashing) was found on the Google Developers site.

## Computational Efficiency in resizing pizzas
The `changePizzaSizes` function contained a lot of unncessary computations for every single
random pizza on the page.  Since the pizzas are all the same size, the `dx` and `newwidth`
variables only need to be calculated once for the first pizza in the array.  The array was also generated once
using a document selector instead of selecting all the elements every time for every for loop.  The time to
resize pizzas is now well under 5ms and is actually under 1ms based on these changes.
I also calculated the length of the array prior to the for loop instead of the loop
having to calculate it each iteration.  The innerHeight of the window was used to determine how many
animated pizzas needed to be drawn.

## Other changes
* Removed the capitalize function and added a `text-transform: capitalize` into the css
for all `h4` elements.
* `document.querySelector` was replaced by `document.getElementbyID`
or `document.getElementsbyClassName` where applicable
based on information contained [here](http://stackoverflow.com/questions/26848289/javascript-queryselector-vs-getelementbyid).
* Minified the html, css, and js for the pizza site
* Used `document.createDocumentFragment` to add the pizzas/toppings and animated pizzas to the page.



# Project Instructions
## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository and inspect the code.

### Getting started

####Part 1: Optimize PageSpeed Insights score for index.html

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ./ngrok http 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

####Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js.

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>