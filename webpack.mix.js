let mix = require('laravel-mix').mix;
let path = require('path');

// mix.config.versioning.enabled = true;

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');


mix.webpackConfig({
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js',
            'src': 'resources/assets/js/',
            'plugins': 'resources/assets/js/plugins/',
            'utils': 'resources/assets/js/utils/',
            'home': 'resources/assets/js/frontend/components/',
        },
        modules: [
            path.resolve('node_modules'),
            path.resolve('./'),
        ]
    }
});