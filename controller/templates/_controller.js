/*@TODO - DONT FORGET TO ADD COMMENTS !! */
"use strict";
/**
 * @doc function
 * @name <%=module_name%>
 * @id <%= angular_path %>.<%=module_name%>
 * @description
 */
angular.module('<%= angular_path %>')
	.controller('<%=module_name%>', ['$scope', function ($scope) {
		console.log('<%=module_name%> controller');
	}]);