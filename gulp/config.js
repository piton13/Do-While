var glob = require('./lib/glob'),
    Layout = require('./lib/layout');

var paths = new Layout({
    server: {
        app: 'bin/www',
        public: 'public'
    },
    src: {
        scss: {
            main: 'styles.scss',
            core: 'core'
        },
        js: {
            main: 'app.js'
        },
        img: 'img',
        fonts: 'fonts',
        html: {
            _root: '/',
            pages: '',
            components: 'html'
        }
    },
    dist: {
        _root: 'server/public',
        html: '',
        js: 'js',
        css: 'css',
        img: {
            icons: 'icons.png',
            retinaIcons: 'icons@2x.png'
        },
        fonts: 'fonts',
        vendor: {
            js: 'js',
            css: 'css'
        }
    },
    bower: 'bower_components'
});

var patterns = new Layout({
    src: {
        html: {
            _root: '/',
            all: glob(['/*', '/html/**/*'], 'html'),
            pages: glob.allOfType('html')
        },
        js: {all: glob.deepAllOfType('js')},
        scss: {all: glob.deepAllOfType('scss')},
        img: {
            icons: {
                all: glob.allOfType('png'),
                retina: glob('/*@2x', 'png')
            },
            all: glob.allOfType()
        },
        fonts: {all: glob.deepAllOfType()}
    },
    dist: {
        _root: paths.server.public,
        all: glob.deepAllOfType(),
        html: {
            _root: '/',
            all: glob.allOfType()
        },
        js: {all: glob.deepAllOfType()},
        css: {all: glob.deepAllOfType()},
        img: {
            icons: glob('/icons*', 'png'),
            pictures: [glob.deepAllOfType(), glob('/icons*', 'png').exclude()],
            all: glob.deepAllOfType()
        },
        fonts: {all: glob.deepAllOfType()},
        vendor: {all: glob.deepAllOfType()}
    }
});

module.exports = {
    paths: paths,
    patterns: patterns
};