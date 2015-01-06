# Fisher WP Master Theme 1.0.0
Fisher WP Master is a WordPress theme based on Zurb Foundation 5 and the Roots Framework.


## Installation

Clone the git repo - `git clone git://github.com/fisherphx/fisherwp.git` - or [download it](https://github.com/fisherphx/fisherwp/zipball/master) and then rename the directory to the name of your theme or website.

Run NPM and the package.json will take care of bower and the initial grunt compile

```php
sudo npm install
```

### Available Grunt commands

* `grunt dev` — Compile SASS to CSS, concatenate and validate JS
* `grunt watch` — Compile assets when file changes are made
* `grunt build` — Create minified assets that are used on non-development environments

## Setup
You'll need to add the following to your `wp-config.php` on your development installation:

```php
define('WP_ENV', 'development');
```

## Documentation

* [Zurb Foundation 5](http://foundation.zurb.com/docs/) — A guide to using Foundation, the files, and theme organization
* [Roots 101](http://roots.io/roots-101/) — A guide to installing Roots, the files, and theme organization
* [Theme Wrapper](http://roots.io/an-introduction-to-the-roots-theme-wrapper/) — Learn all about the theme wrapper
* [Build Script](http://roots.io/using-grunt-for-wordpress-theme-development/) — A look into how Roots uses Grunt
* [Roots Sidebar](http://roots.io/the-roots-sidebar/) — Understand how to display or hide the sidebar in Roots