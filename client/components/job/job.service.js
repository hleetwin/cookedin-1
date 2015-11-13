'use strict';

angular.module('cookedinApp')

// .factory('Job', function($http) {
//   var getJobs = function() {
//     return $http({
//       method: 'GET',
//       url: '/api/job'
//     })
//     .then(function(res) {
//       return res.data;
//     });
//   };

//   var addJob = function(job) {
//     return $http({
//       method: 'POST',
//       url: '/api/job',
//       data: job
//     });
//   };

//   return {
//     getJobs: getJobs,
//     addJob: addJob
//   };
// })

.factory('Job', function ($resource) {
  return $resource('/api/jobs/:id/:controller', {
    id: '@_id'
  },
  {
    addJob: {
      method: 'PUT',
      params: {
        controller:'password'
      }
    }
  });
});
