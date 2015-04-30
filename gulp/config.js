var dest = '../roomcast/interfaces/configuration-interface',
    src = './src',
    mui = './node_modules/material-ui/src';

module.exports = {
    browserSync: {
        server: {
            // We're serving the src folder as well
            // for sass sourcemap linking
            baseDir: [dest, src]
        },
        files: [
            dest + '/**'
        ]
    },
    less: {
        src: src + '/less/main.less',
        watch: [
            src + '/less/**',
            mui + '/less/**'
        ],
        dest: dest
    },
    markup: {
        src: src + "/web/**",
        dest: dest
    },
    css: {
        src: src + "/css/**",
        dest: dest
    },
    fonts: {
        src: mui + '/less/material-design-fonticons/fonts/**',
        dest: dest + '/fonts/mdfonticon'
    },
    muiFonts: {
        src: mui + '/less/material-ui-icons/fonts/**',
        dest: dest + '/fonts'
    },
    nutella3: {
        src: './node_modules/nutella_lib/dist/nutella_lib.js',
        dest: dest
    },
    browserify: {
        // Enable source maps
        debug: true,
        // A separate bundle will be generated for each
        // bundle config in the list below
        bundleConfigs: [{
            entries: src + '/app/app.js',
            dest: dest,
            outputName: 'app.js'
        }]
    }
};