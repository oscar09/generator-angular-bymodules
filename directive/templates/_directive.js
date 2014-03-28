/*@TODO - DONT FORGET TO ADD COMMENTS !! */
"use strict";
/**
 * @doc function
 * @name <%=module_name%>
 * @id <%= angular_path %>.<%=module_name%>
 * @description
 */
angular.module('directives.<%= module_name %>')
	.directive('<%=module_name%>', [ function () {
		return {
			template: '',
			restrict: '',
			replace: false,
			scope: {},
			controller: function($scope){},
			link: function postLink(scope, element, attrs) {
			}
		};
	}]);