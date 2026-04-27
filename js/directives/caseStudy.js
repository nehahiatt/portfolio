app.directive('caseStudy', function() { 
    return { 
      restrict: 'E', 
      scope: { 
        case: '=' 
      }, 
      templateUrl: 'js/directives/caseStudy.html' 
    }; 
}); 