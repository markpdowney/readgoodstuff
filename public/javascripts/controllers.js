function IndexCtrl($scope, $http) {
  $http.get('/api/books').
    success(function(data, status, headers, config) {
      $scope.books = data.books;
    });
}
