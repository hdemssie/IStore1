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

    //-------------------------- Log in ---------------------->>>>

            .state('secret', {
                url: '/secret',
                templateUrl: '/ngApp/views/secret.html',
                controller: IStore_ .Controllers.SecretController,
                controllerAs: 'controller'
            })
            .state('login', {
                url: '/login',
                templateUrl: '/ngApp/views/login.html',
                controller: IStore_ .Controllers.LoginController,
                controllerAs: 'controller'
            })
            .state('register', {
                url: '/register',
                templateUrl: '/ngApp/views/register.html',
                controller: IStore_ .Controllers.RegisterController,
                controllerAs: 'controller'
            })
            .state('externalRegister', {
                url: '/externalRegister',
                templateUrl: '/ngApp/views/externalRegister.html',
                controller: IStore_ .Controllers.ExternalRegisterController,
                controllerAs: 'controller'
            })  

    //--------------------------------Author-----------------------
            .state('author', {
                url: '/author',
                templateUrl: '/ngApp/views/Author.html',
                controller: IStore_.Controllers.AuthorController,
                controllerAs: 'controller'
            })   

    //-------------------------------Add-Author-----------------------
            .state('addauthorBook', {
                url: '/addauthorBook',
                templateUrl: '/ngApp/views/AddAuthor.html',
                controller: IStore_.Controllers.AddAuthorController,
                controllerAs: 'controller'
            })   

    //-------------------------------Book List----------------------->>>
            .state('bookList', {
                url: '/bookList/:id',
                templateUrl: '/ngApp/views/bookList.html',
                controller: IStore_.Controllers.AuthorBookListController,
                controllerAs: 'controller'
            })   
    //----------------------------------Add-Book-----------------------
            .state('addBook', {
                url: '/addBook',
                templateUrl: '/ngApp/views/addBook.html',
                controller: IStore_.Controllers.BookController,
                controllerAs: 'controller'
            })

    //------------------------- Delete -Book-------------------------
            .state('deleteBook', {
                url: '/deleteBook/:id',
                templateUrl: '/ngApp/views/deleteBook.html',
                controller: IStore_.Controllers.BookDeleteController,
                controllerAs: 'controller'
            })
    //----------------------------- Detail-Book-------------------------

            .state('detailBook', {
                url: '/detailBook/:id',
                templateUrl: '/ngApp/views/detailBook.html',
                controller: IStore_.Controllers.BookDetailController,
                controllerAs: 'controller'
            })


    //----------------------------- Edit -Book-------------------------

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
//=======================================================Ended here====O
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
