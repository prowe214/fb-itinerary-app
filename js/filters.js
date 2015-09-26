
myApp.filter('richText', function () {
  return function (text) {
    return text.split('↵');
  };
});

myApp.filter('dateFilter', function () {
  return function (input, scope) {
    var results = [];
    input.forEach(function (item) {
      if (item.start_time > Date.now()) {
        if (item.start_time > scope.startDate && item.start_time < scope.endDate) {
          results.push(item);
        }
      }
    });
    return results;
  };
});
