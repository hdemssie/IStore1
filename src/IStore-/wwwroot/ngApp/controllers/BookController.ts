
namespace IStore_.Controllers {
   

    // add, edit, save , and front (client)controller then make change --------------

    //,,,,,,,,,,,,,,,,,,,,,Add ,,,,,,,,,,,>>>>>>>>>>>

    export class BookController {

        private bookResource;
        public books;
        public book;

        public getBooks() {

            this.books = this.bookResource.query();
            console.log(this.books);
        }

        constructor(private $resource: angular.resource.IResourceService,
            private $state: angular.ui.IStateService
        ) {
            this.bookResource = $resource("/api/books/");
            this.getBooks();

        }
        public save() {
            this.bookResource.save(this.book).$promise.then(() => {
                this.$state.go(`home`);
                this.book = null;
                this.getBooks();

            });

        }

    }

    //==============Detail==========================>>>>>

    export class BookDetailController {
        private BookResource;
        public book;

        public getBookById(id: number) {
            this.book = this.BookResource.get({ id: id });

        }

        constructor(
            private $resource: angular.resource.IResourceService,
            private $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService
        ) {
            this.BookResource = $resource(`/api/books/:id`);
            this.book = this.getBookById($stateParams[`id`]);
            console.debug(this.book);

        }

    }
    //----------------Edit------------------->>

    export class BookEditController {
        private BookResource;
        public book;
        public message = "hello!"

        public getBookById(id: number) {
            this.book = this.BookResource.get({ id: id });
            console.log("I have run...");
        }
        public save() {
            this.BookResource.save(this.book).$promise
                .then(() => {
                    this.$state.go(`home`);
                    this.book = null;

                });
        }

        constructor(
            private $resource: angular.resource.IResourceService,
            private $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService
        ) {
            this.BookResource = $resource(`/api/books/:id`);
            this.getBookById($stateParams[`id`]);
            console.debug(this.book);

        }

    }
    //----------------Delete------------------->>>>

    export class BookDeleteController {
        private BookResource;
        public book;


        public getBookById(id: number) {
            this.book = this.BookResource.get({ id: id });

        }
        public delete() {
            this.BookResource.delete(this.book).$promise
                .then(() => {
                    this.$state.go(`home`);
                    this.book = null;

                });
        }

        constructor(
            private $resource: angular.resource.IResourceService,
            private $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService
        ) {
            this.BookResource = $resource(`/api/books/:id`);
            this.getBookById($stateParams[`id`]);

        }

    }
}
