/*@TODO - DONT FORGET TO ADD COMMENTS !! */
"use strict";
/**
 * @doc function
 * @name <%=module_name%>
 * @id <%= angular_path %>.<%=module_name%>
 * @description
 */
angular.module('filters.<%= module_name %>')
	.filter('<%= module_name %>', function() {
		return function(input) {
			return input;
		}
	});