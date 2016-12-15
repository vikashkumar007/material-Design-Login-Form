angular.module("EzdiskonAdmin").run(["$templateCache", function($templateCache) {$templateCache.put("app/login.html","<!DOCTYPE html><html lang=\"en\"><head><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><link rel=\"stylesheet\" href=\"http://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"login.css\"></head><body ng-app=\"BlankApp\" ng-cloak=\"\"><div layout=\"column\" ng-cloak=\"\" class=\"md-inline-form inputdemoBasicUsage\"><md-content md-theme=\"docs-dark\" layout-gt-sm=\"row\" layout-padding=\"\"><form name=\"projectForm\"><div><md-input-container class=\"md-block\"><label>Client Email</label> <input required=\"\" type=\"email\" name=\"clientEmail\" ng-model=\"project.clientEmail\" minlength=\"10\" maxlength=\"100\" ng-pattern=\"/^.+@.+\\..+$/\"><div ng-messages=\"projectForm.clientEmail.$error\" role=\"alert\"><div ng-message-exp=\"[\'required\', \'minlength\', \'maxlength\', \'pattern\']\">Your email must be between 10 and 100 characters long and look like an e-mail address.</div></div></md-input-container><md-input-container class=\"md-block\"><label>Password</label> <input required=\"\" type=\"password\" name=\"password\" minlength=\"5\" maxlength=\"10\" ng-model=\"project.password\"><div ng-messages=\"projectForm.password.$error\" role=\"alert\"><div ng-message-exp=\"[\'required\', \'minlength\', \'maxlength\']\">Your password must be between 5 and 10 characters long.</div></div></md-input-container><md-button type=\"submit\" class=\"btn\">Submit</md-button></div></form></md-content><script src=\"http://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js\"></script><script src=\"http://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-animate.min.js\"></script><script src=\"http://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-aria.min.js\"></script><script src=\"http://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-messages.min.js\"></script><script src=\"http://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.js\"></script><script type=\"text/javascript\">\n        /**\n         * You must include the dependency on \'ngMaterial\' \n         */\n        angular.module(\'BlankApp\', [\'ngMaterial\']);\n        </script></div></body></html>");}]);