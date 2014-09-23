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
            MONGOLAB_URI: '<%= config.mongo_url %>'
          }
        }
      }
    },
    shell: {
      options: {
        stdout: true,
        stderr: true,
        failOnError: true
      },
      remove_init_data: {
        command: 'mongo <%= config.mongo_db %> --eval "db.dropDatabase()"'
      },
      add_init_data: {
        command: [
          'mongoimport --db <%= config.mongo_db %> --collection users --type json --file db/users.json --jsonArray',
          'mongoimport --db <%= config.mongo_db %> --collection countries --type json --file db/countries.json --jsonArray',
          'mongoimport --db <%= config.mongo_db %> --collection languages --type json --file db/languages.json --jsonArray',
          'mongoimport --db <%= config.mongo_db %> --collection currencies --type json --file db/currencies.json --jsonArray',
          'mongoimport --db <%= config.mongo_db %> --collection statuses --type json --file db/statuses.json --jsonArray'
        ].join('&&')
      },
      add_init_production_data: {
        command: [
          'mongoimport --host <%= config.mongo_lab_host %> --port <%= config.mongo_lab_port %> -u <%= config.mongo_lab_user %> -p <%= config.mongo_lab_password %> --db <%= config.mongo_lab_db %> --collection users --type json --file db/users.json --jsonArray',
          'mongoimport --host <%= config.mongo_lab_host %> --port <%= config.mongo_lab_port %> -u <%= config.mongo_lab_user %> -p <%= config.mongo_lab_password %> --db <%= config.mongo_lab_db %> --collection countries --type json --file db/countries.json --jsonArray',
          'mongoimport --host <%= config.mongo_lab_host %> --port <%= config.mongo_lab_port %> -u <%= config.mongo_lab_user %> -p <%= config.mongo_lab_password %> --db <%= config.mongo_lab_db %> --collection languages --type json --file db/languages.json --jsonArray',
          'mongoimport --host <%= config.mongo_lab_host %> --port <%= config.mongo_lab_port %> -u <%= config.mongo_lab_user %> -p <%= config.mongo_lab_password %> --db <%= config.mongo_lab_db %> --collection currencies --type json --file db/currencies.json --jsonArray',
          'mongoimport --host <%= config.mongo_lab_host %> --port <%= config.mongo_lab_port %> -u <%= config.mongo_lab_user %> -p <%= config.mongo_lab_password %> --db <%= config.mongo_lab_db %> --collection statuses --type json --file db/statuses.json --jsonArray'
        ].join('&&')
      }
    }
  });

  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', ['nodemon']);
  grunt.registerTask('prepare-db', [
    'shell:remove_init_data',
    'shell:add_init_data'
  ]);
  grunt.registerTask('prepare-db-production', [
    'shell:add_init_production_data'
  ]);
}