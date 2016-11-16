namespace IStore_ {

    angular.module('IStore_', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/Book.html',
                controller: IStore_.Controllers.BookController,
                controllerAs: 'controller'
            })
            .state('addBook', {
                url: '/addBook',
                templateUrl: '/ngApp/views/addBook.html',
                controller: IStore_.Controllers.BookController,
                controllerAs: 'controller'
            })

            //---------------- Delete --------------------------
            .state('deleteBook', {
                url: '/deleteBook/:id',
                templateUrl: '/ngApp/views/deleteBook.html',
                controller: IStore_.Controllers.BookDeleteController,
                controllerAs: 'controller'
            })

            //---------------- Edit --------------------------

            .state('editBook', {
                url: '/editBook/:id',
                templateUrl: '/ngApp/views/editBook.html',
                controller: IStore_.Controllers.BookEditController,
                controllerAs: 'controller'
            })


            .state('books', {
                url: '/books',
                templateUrl: '/ngApp/views/Books.html',
                controller: IStore_.Controllers.BookController,
                controllerAs: 'controller'
            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });
//======================================================================Ended here
        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });

    
    angular.module('IStore_').factory('authInterceptor', (
        $q: ng.IQService,
        $window: ng.IWindowService,
        $location: ng.ILocationService
    ) =>
        ({
            request: function (config) {
                config.headers = config.headers || {};
                config.headers['X-Requested-With'] = 'XMLHttpRequest';
                return config;
            },
            responseError: function (rejection) {
                if (rejection.status === 401 || rejection.status === 403) {
                    $location.path('/login');
                }
                return $q.reject(rejection);
            }
        })
    );

    angular.module('IStore_').config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    });

    

}
