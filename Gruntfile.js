module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    config: grunt.file.readJSON('config.json'),
    nodemon: {
      dev: {
        script: 'server.js',
        options: {
          args: ['dev'],
          nodeArgs: ['--debug'],
          callback: function (nodemon) {
            nodemon.on('log', function (event) {
              console.log(event.colour);
            });
          },
          env: {
            PORT: '8181',
            MONGO_URL: '<%= config.mongo_url %>'
          }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('default', ['nodemon']);
}