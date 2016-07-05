// create package.json
// run npm install
// npm install grunt-contrib-cssmin --save-dev
// grunt-contrib-htmlmin
// grunt-purifycss
// grunt-image-embed
// grunt-usemin
// npm install --save-dev imagemin-mozjpeg
// see http://grunt-tasks.com/


module.exports = function(grunt) {
    // 1. All configuration goes here
    // var mozjpeg = require('imagemin-mozjpeg');
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
                        'views/images/pizzeria.jpg': 'views/images_original/pizzeria-resize.jpg',
                        'views/images/pizza.png': 'views/images_original/pizza.png'

                    }
                }
            },

            responsive_images: {
                target: {
                    options: {
                        sizes: [{name: "resize",width: 720, height: 540, quality: 25}]
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
            }

     });

    // 3. Where we tell Grunt we plan to use this plug-in.
    //grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');


    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    //grunt.registerTask('default', ['cssmin']);
    // grunt.registerTask('default', ['imagemin', 'imagemin:target2']);
    grunt.registerTask('default', ['responsive_images', 'imagemin', 'cssmin', 'htmlmin']);

};