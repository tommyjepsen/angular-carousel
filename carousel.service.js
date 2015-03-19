(function () {
	'use strict';

	angular
		.module('app')
		.service('CarouselUtil', CarouselUtil);

	function CarouselUtil() {

		var service = {
			convertData: convertData
		};

		return service;

		function convertData(data) {
			var structuredData = [];

			if(data.length <= 0) {
				return structuredData;
			}

			for(var i = 0; i < data.images.length; i++) {
				structuredData.push(data.images[i].image);
			}
			return structuredData;
		}

	};

})();
