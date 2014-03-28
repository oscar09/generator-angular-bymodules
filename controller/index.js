'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');

var ControllerGenerator = yeoman.generators.NamedBase.extend({
  init: function () {
	  if(!this.name)
	  {
		  console.log(chalk.red('Please provide the controller name (example: module.submodule.sampleCtrl)'));
		  return false;
	  }
	  var module_route = this.name.split('.');
	  var file_name = module_route[module_route.length - 1];
	  var dir_path = [];
	  var dir_path_string = '';

	  for(var i = 0, len = module_route.length; i < len - 1; i++)
	  {
		  dir_path.push(module_route[i].toLowerCase());
	  }

	  dir_path_string = dir_path.join('/');

	  this.parent_folder = module_route[module_route.length - 2];
	  this.module_path = dir_path_string;
	  this.module_name = file_name;
  },

  files: function () {
	  if(this.module_path && this.module_name)
	  {
		  this.angular_path = 'modules.'+this.module_path.replace(/\//g,'.');
		  console.log(chalk.blue('Creating Controller ...'));
		  this.copy('_controller.js', 'app/scripts/modules/' + this.module_path + '/' + this.parent_folder + '_' + this.module_name + '.js');
	  }
  }
});

module.exports = ControllerGenerator;