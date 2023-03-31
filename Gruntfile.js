// our wrapper function (required by grunt and its plugins)
// all configuration goes inside this function
module.exports = function(grunt) {

    // CONFIGURE GRUNT
    grunt.initConfig({
       // get the configuration info from package.json file
       // this way we can use things like name and version (pkg.name)
       pkg: grunt.file.readJSON('package.json'),
       uglify : {
        js : {
            files : {
                'dist/generate.min.js' : 'lib/generate.js',
                'dist/shapes.min.js' : 'lib/shapes.js',
                'dist/shapes.test.min.js' : 'lib/shapes.test.js',
            }
        },
        js2 : {
            files : {
                'dist/index.min.js' : 'index.js'
            }
        }
      }
 
    });
 
    // Load the plugin that provides the "uglify" task
    grunt.loadNpmTasks('grunt-contrib-uglify');
 
    // Default task(s)
    grunt.registerTask('default', ['uglify']);

    
 };