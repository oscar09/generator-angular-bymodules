'use strict';

/**
 * @ngdoc overview
 * @name <%= _.slugify(appName) %>
 * @id <%= _.slugify(appName) %>
 * @description Main application.
 */
angular.module('<%= _.slugify(appName) %>', [
	])
	.config([ function () {

	}])
	.run([ function(){

	}])
;

/**
 * @ngdoc function
 * @name MainCtrl
 * @id <%= _.slugify(appName) %>.MainCtrl
 * @description Main Controller.
 *
 */
angular.module('<%= _.slugify(appName) %>').controller('MainCtrl', ['$scope', function($scope) {

}]);
