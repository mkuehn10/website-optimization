module.exports = function(grunt) {
    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
            cssmin: {
                target: {
                    files: [{
                        expand: true,
                        cwd: 'css',
                        src: ['*.css', '!*.min.css'],
                        dest: 'css',
                        ext: '.min.css'
                    }]
                }
            },
            imagemin: {
                target: {
                    options: {
                        optimizationLevel: 7
                    },
                    files: [{
                        expand: true,
                        cwd: 'img_original/',
                        src: ['*.{png,jpg,gif}'],
                        dest: 'img/'
                    }]
                },
                target2: {
                    options: {
                        optimizationLevel: 7,
                        progressive: true
                    },
                    files: {
                        'views/images/pizzeria-resize.jpg': 'views/images_original/pizzeria-resize.jpg',
                        'views/images/pizza.png': 'views/images_original/pizza.png',
                        'views/images/pizzeria.jpg': 'views/images_original/pizzeria-original.jpg'
                    }
                }
            },
            responsive_images: {
                target: {
                    options: {
                        sizes: [{name: "resize",width: 100, quality: 15},
                                {name: "original", width: 720, quality: 25}]
                    },
                    files: {'views/images_original/pizzeria.jpg': 'views/images_original/pizzeria.jpg'}
                }
            },
            htmlmin: {
                target: {
                    options: {
                        removeComments: true,
                        collapseWhitespace: true
                    },
                    files: {
                        'index.html': 'index_original.html'
                    }
                }
            },
            purifycss: {
                options: {
                },
                target: {
                    src: ['index_original.html', 'js/*.js'],
                    css: ['css/style.css'],
                    dest: 'css/pure-css.css'
                }
            }
     });
    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-purifycss');
    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['responsive_images', 'imagemin', 'purifycss', 'htmlmin', 'cssmin']);
};