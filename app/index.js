'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var AngularBymodulesGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('Angular-am organizes an angular project by modules. Directives, filters, services, etc are kept in common folders.'));

    var prompts = [
	    {
		    name: 'appName',
		    message: 'What do you want to call your app?',
		    default: 'clientApp'
	    },
	    {
		    type: 'confirm',
		    name: 'bootstrap',
		    message: 'Would you like to include bootstrap?',
		    default: true
	    },
	    {
		    type: 'checkbox',
		    name: 'modules',
		    message: 'Which modules would you like to include?',
		    choices: [{
			    value: 'resourceModule',
			    name: 'angular-resource.js',
			    checked: true
		    }, {
			    value: 'cookiesModule',
			    name: 'angular-cookies.js',
			    checked: true
		    }, {
			    value: 'sanitizeModule',
			    name: 'angular-sanitize.js',
			    checked: true
		    }, {
			    value: 'routeModule',
			    name: 'angular-route.js',
			    checked: true
		    }]
	    }
    ];

    this.prompt(prompts, function (props) {
	    var hasMod = function (mod) { return props.modules.indexOf(mod) !== -1; };
	    this.appName = props.appName;
	    this.bootstrap = props.bootstrap;

	    this.resourceModule = hasMod('resourceModule');
	    this.cookiesModule = hasMod('cookiesModule');
	    this.sanitizeModule = hasMod('sanitizeModule');
	    this.routeModule = hasMod('routeModule');

	    var angMods = [];

	    if (this.cookiesModule) {
		    angMods.push("'ngCookies'");
	    }

	    if (this.resourceModule) {
		    angMods.push("'ngResource'");
	    }
	    if (this.sanitizeModule) {
		    angMods.push("'ngSanitize'");
	    }
	    if (this.routeModule) {
		    angMods.push("'ngRoute'");
		    this.env.options.ngRoute = true;
	    }

	    if (angMods.length) {
		    this.env.options.angularDeps = '\n    ' + angMods.join(',\n    ') + '\n  ';
	    }

      done();
    }.bind(this));
  },

  app: function () {
    this.mkdir('app');
    this.mkdir('app/directives');
    this.mkdir('app/filters');
    this.mkdir('app/modules');
    this.mkdir('app/resources');
    this.mkdir('app/services');
    this.mkdir('fonts');
    this.mkdir('img');
    this.mkdir('styles');
    this.mkdir('vendor');
    this.mkdir('docs');
    this.mkdir('tests');
    this.mkdir('tests/mocks');
    this.mkdir('tests/e2e');
    this.mkdir('tests/unit');

    this.copy('_package.json', 'package.json');
	  this.template('_bower.json', 'bower.json');
	  this.template('_app.js', 'app/app.js');
	  this.template('_index.html', 'index.html');
	  this.template('Gruntfile.js', 'Gruntfile.js');
    //this.copy('_bower.json', 'bower.json');
  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = AngularBymodulesGenerator;