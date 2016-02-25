module.exports = function(grunt) {
  grunt.initConfig ({
    pkg: grunt.file.readJSON('package.json'),

    /*============================================================
     Sass
     ============================================================*/
    sass: {
      compile: {
        options: {
          style: 'compressed'
        },

        files: {
          'main.css': 'scss-positive/main.scss'
        }
      }
    },

    /*============================================================
     Scss lint
     ============================================================*/
    scsslint: {
      allFiles: ['scss-positive/partials/*.scss'],
      
//      options: {
//        exclude: ['node_modules/bootstrap-sass/assets/stylesheets/**/*.scss']
//      }
    },

    /*============================================================
     JS hint
     ============================================================*/
    jshint: {
      all: ['Gruntfile.js', 'main.js'],
    },

    /*============================================================
     Watch
     ============================================================*/
    watch: {
      js: {
        files: ['main.js'
		],
        tasks: ['jshint']
      },
      sass: {
        files: ['scss-positive/**/*.scss'
        ],
        tasks: ['sass', 'scsslint'],
        options: {
          livereload: true
        }
      }
    },
  
  });

  // Loads the required plugins.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-scss-lint');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-complexity');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jscpd');
  grunt.loadNpmTasks('grunt-complexity');

  // Default tasks.
  grunt.registerTask('default', ['sass', 'watch']);

  // Executes test tasks.
  grunt.registerTask('test', ['scsslint', 'jshint', 'jscpd', 'complexity']);
  grunt.registerTask('testjs', ['jshint', 'jscpd:js', 'complexity']);
  grunt.registerTask('testsass', ['scsslint', 'jscpd:sass']);

};
