/*@TODO - DONT FORGET TO ADD COMMENTS !! */
"use strict";

/**
 * @ngdoc overview
 * @name
 * @id <%= angular_module_name %>
 * @description
 */

angular.module('<%= angular_module_name %>',
		[
		])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('<%= angular_path %>', { //@TODO update the route & template if needed.
			templateUrl:'scripts/modules/<%= angular_path %>/<%= module_name %>.html',
			controller:'<%=module_name%>Ctrl',
			resolve:{

			}
		})
		;
	}])
/**
 * @doc function
 * @name <%=module_name%>Ctrl
 * @id <%= angular_module_name %>.<%=module_name%>Ctrl
 * @description
 */
	.controller('<%=module_name%>Ctrl', ['$scope', function ($scope) {

	}])
;