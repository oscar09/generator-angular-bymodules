'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');


var ModuleGenerator = yeoman.generators.NamedBase.extend({
	init: function () {
		if(!this.name)
		{
			console.log(chalk.red('Please provide the module name (example: settings.loansettings)'));
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


		this.module_path = dir_path_string;
		this.module_name = file_name;
	},

	files: function () {
		if(this.module_path && this.module_name)
		{
			console.log(chalk.blue('Creating JS file ...'));
			this.angular_module_name = 'modules.'+this.module_path.replace(/\//g,'.') + '.'+ this.module_name.toLowerCase();

			this.angular_path = this.module_path + '/'+ this.module_name.toLowerCase();
			this.template('_module.js', 'app/scripts/modules/' + this.module_path + '/' + this.module_name + '/' + this.module_name + '.js');
			console.log(chalk.blue('Creating HTML file ...'));
			this.copy('_module.html', 'app/scripts/modules/' + this.module_path + '/' + this.module_name + '/' + this.module_name + '.html');
		}
	}
});

module.exports = ModuleGenerator;