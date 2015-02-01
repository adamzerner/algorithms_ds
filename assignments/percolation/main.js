angular.module('percolation', [])
	.controller('main', function($scope) {
		var grid;
		$scope.numOpen = 0;
		$scope.results = []; // results of experiments
		$scope.numExperiments = 1;
		$scope.trialNumber = 1;

		$scope.getNumber = function() {
			var arr = [];
			for (var i = 0; i < $scope.n; i++) {
				arr.push(i);
			}
			return arr;
		};
		$scope.reset = function() {
			$scope.n = +$('#N').val();
			grid = new Grid($scope.n);
			$('td').css('background-color', 'white');
			$scope.numOpen = 0;
			$('.actionButton').prop('disabled', false);
		};
		$scope.open = function() {
			// choose a random i and j amongst the currently closed elements
			while (true) {
				var i = Math.floor(Math.random() * $scope.n);
				var j = Math.floor(Math.random() * $scope.n);
				if (!grid.isOpen(i,j)) break;
			}
			grid.open(i, j);
			$scope.numOpen++;
			if (grid.isFull(i,j)) { // O(N^2)
				// light stuff up blue
				var el = twoD_to_oneD(i, j, $scope.n);
				var root = grid.uf.root(el);
				var componentElements = [];
				for (var a = 0; a < $scope.n*$scope.n; a++) {
					var aTuple = oneD_to_twoD(a, $scope.n);
					if (!grid.isOpen(aTuple[0], aTuple[1])) continue; // only open elements can be lit up blue. solves problem with top row being all blue.
					if (grid.uf.root(a) === root) {
						var tuple = oneD_to_twoD(a, $scope.n);
						var ij = tuple[0].toString() + tuple[1].toString();
						componentElements.push(ij); // string of ij to match data-id
					}
				}
				componentElements.forEach(function(ij) {
					$('[data-id=' + ij + ']').css('background-color', 'lightblue');
				});
			}
			else {
				// make element (i,j) have a dark background-color
				$('[data-id='+i+j+']').css('background-color', 'lightgray');
			}
			if (grid.percolates()) {
				// notify
				// alert('percolates!');
				var total = $scope.n * $scope.n;
				$scope.results.push($scope.numOpen/total);
				$('.actionButton').prop('disabled', true);
			}
		};
		$scope.runExperiment = function() {
			while ($('.actionButton').prop('disabled') === false) {
				$scope.open();
			}
			$scope.trialNumber++;
			$('#trialNumber').text($scope.trialNumber);
			$scope.reset();
		};
		$scope.runExperiments = function(num) {
			for (var i = 0; i < num; i++) {
				$scope.runExperiment();
			}
		};
		$scope.mean = function() {
			var sum = 0;
			for (var i = 0, len = $scope.results.length; i < len; i++) {
				sum += $scope.results[i];
			}
			return sum / $scope.results.length;
		};
		$scope.stddev = function() {
			var mean = this.mean();
			var sum = 0;
			for (var i = 0, len = $scope.results.length; i < len; i++) {
				sum += ($scope.results[i]-mean) * ($scope.results[i]-mean);
			}
			return Math.sqrt(sum / (len-1));
		};
		$scope.confidenceLow = function() {
			var mean = this.mean();
			var stddev = this.stddev();
			return mean - (1.96*stddev)/Math.sqrt($scope.results.length);
		};
		$scope.confidenceHigh = function() {
			var mean = this.mean();
			var stddev = this.stddev();
			return mean + (1.96*stddev)/Math.sqrt($scope.results.length);
		};
	});