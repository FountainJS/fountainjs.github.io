To preview your web app in your favourite web browser, you don't have to do anything special to set up a local web server on your computer &mdash; it's part of Yeoman.

## Start the server

Run a npm script to create a local, Node-based http server on [localhost:3000](http://localhost:3000) (or [127.0.0.1:3000](http://127.0.0.1:3000) for some configurations) by typing:

```sh
npm run serve
```

Open a new tab in your web browser on [localhost:3000](http://localhost:3000):

<a href="/assets/imgs/codelab/05_run_preview.png" target="_blank"><img src="/assets/imgs/codelab/05_run_preview.png" alt="05_run_preview" style="width: 800px;"></a>

## Stop the server

If you ever need to stop the server, use the <span class="keyboard">Ctrl</span>+<span class="keyboard">C</span> keyboard command to quit your current CLI process.

Note: You can't have more than one http server running on the same port (default 3000).

## Watch your files

Open up your favorite text editor and start making changes. Each save will automatically force a browser refresh so you don’t have to do this yourself. This is called *live reloading* and it’s a nice way of getting a real-time view of your application state.

Live reloading is made available to your application through a set of Gulp tasks configured in `gulpfile.js` and [Browsersync](https://www.browsersync.io/) configured in `gulp_tasks/browsersync.js`; it watches for changes to your files and automatically reloads them if it detects a change.

Below, we edited *Header.js* in the *src/app/components* directory. Thanks to live reload we go from this:

<a href="/assets/imgs/codelab/05_before_live_reload.png" target="_blank"><img src="/assets/imgs/codelab/05_before_live_reload.png" alt="05_before_live_reload" style="width: 800px;"></a>

To this instantly:

<a href="/assets/imgs/codelab/05_after_live_reload.png" target="_blank"><img src="/assets/imgs/codelab/05_after_live_reload.png" alt="05_after_live_reload" style="width: 800px;"></a>

<p class="codelab-paging">
  <a href="/codelab/#toc">&laquo; Return to overview</a>
  or
  <a href="run-unit-tests">Go to the next step &raquo;</a>
</p>
