## Current Error Output

![error output](/webpack.watch.error.gif)

### How to reproduce

run the following command

```sh
$ npm i
$ webpack --config ./webpack.config.dll.js
$ webpack --config ./webpack.config.js -w
```

Save the file `app.tsx` (no change is required, just saving the fill will trigger a rebuild from webpack), notice the first build happens with no error.