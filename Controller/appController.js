/**
 * @author annie
 */

var myApp = angular.module('bookTrial', []);

myApp.controller('bookController', ['$scope', function($scope) {
   $scope.books = [{name: 'Pride and Prejudice',
									   author:'Jane Austen',
									   category:'Classic'},
									   {name: 'Anne of Green Gables',
									   author:'Lucy Maud Montgomery',
									   category:'Classic'},
									   {name: 'Chronicles of Narnia',
									   author:'C.S Lewis',
									   category:'Fantasy'},
									   {name: 'Little Women',
									   author:'Louisa May Alcott',
									   category:'Classic'},
									   {name: 'Harry Potter Series',
									   author:'JK Rowling',
									   category:'Fantasy'}];
}]);
