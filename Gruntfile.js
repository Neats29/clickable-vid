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
          'src/wp-content/themes/xcomfort-consumers/library/css/eaton.min.css': 'src/wp-content/themes/xcomfort-consumers/library/scss/eaton.scss',
		  'src/wp-content/themes/xcomfort-consumers/library/css/positive.min.css': 'src/wp-content/themes/xcomfort-consumers/library/scss-positive/main.scss'
        }
      }
    },

    /*============================================================
     Scss lint
     ============================================================*/
    scsslint: {
     // allFiles: ['src/wp-content/themes/xcomfort-consumers/library/scss/**/*.scss'],
      
      options: {
        exclude: ['node_modules/bootstrap-sass/assets/stylesheets/**/*.scss']
      }
    },

    /*============================================================
     Code Duplication
     ============================================================*/
    jscpd: {
      sass: {
		path: ['src/wp-content/themes/xcomfort-consumers/library/scss/**/*',
          'src/wp-content/themes/xcomfort-consumers/library/scss-positive/**/*'
		],
      },
      js: {
        path: 'src/wp-content/themes/xcomfort-consumers/library/js/custom/**/*.js',
        exclude: ['src/wp-content/themes/xcomfort-consumers/library/js/libs/**/*.js']
      } 
    },

    /*============================================================
     JS hint
     ============================================================*/
    jshint: {
      all: ['Gruntfile.js', 'src/wp-content/themes/xcomfort-consumers/library/js/custom/**/*.js'],
      options: {
            ignores: ['src/wp-content/themes/xcomfort-consumers/library/js/libs/**/*.js',
              'src/wp-content/themes/xcomfort-consumers/library/js/dev/vendor/**/*.js',
              'src/wp-content/themes/xcomfort-consumers/library/js/dev/old-browsers/**/*.js'
			]
      }
    },

    /*============================================================
     Code Complexity
     ============================================================*/
    complexity: {
      generic: {
        src: ['src/wp-content/themes/xcomfort-consumers/library/js/custom/**/*.js',
          'src/wp-content/themes/xcomfort-consumers/library/js/dev/main.js'
		],
        options: {
          breakOnErrors: true,
          errorsOnly: false, // show only maintainability errors
          cyclomatic: [6], // or optionally a single value, like 3
          halstead: [20], // or optionally a single value, like
          maintainability: 100,
          hideComplexFunctions: false, // only display maintainability
          broadcast: true // broadcast data over event-bus
        }
      }
    },

    /*============================================================
     Watch
     ============================================================*/
    watch: {
      js: {
        files: ['src/wp-content/themes/xcomfort-consumers/library/js/custom/**/*.js',
          'src/wp-content/themes/xcomfort-consumers/library/js/dev/main.js'
		],
        tasks: ['jshint', 'concat', 'uglify']
      },
      sass: {
        files: ['src/wp-content/themes/xcomfort-consumers/library/scss/**/*.scss',
          'src/wp-content/themes/xcomfort-consumers/library/scss-positive/**/*.scss'
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
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jscpd');
  grunt.loadNpmTasks('grunt-complexity');

  // Default tasks.
  grunt.registerTask('default', ['sass', 'concat', 'watch']);

  // Executes test tasks.
  grunt.registerTask('test', ['scsslint', 'jshint', 'jscpd', 'complexity']);
  grunt.registerTask('testjs', ['jshint', 'jscpd:js', 'complexity']);
  grunt.registerTask('testsass', ['scsslint', 'jscpd:sass']);

};


