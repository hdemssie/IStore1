namespace IStore_.Controllers {
    export class AuthorController {
        private AuthorResource;
        public author;
        public authorId;

        public getAuthorById(id) {
            this.authorId = this.AuthorResource.get({ id: id });
            console.log(this.authorId);

        }
        public save() {
            this.AuthorResource.save(this.author).$promise
                .then(() => {
                    this.$state.go(`home`);
                    this.author = null;

                });
        }
        public getAuthors() {
            this.author = this.AuthorResource.query();
        
        }
        constructor(
            private $resource: angular.resource.IResourceService,
            private $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService
        ) {
            this.AuthorResource = $resource("/api/authors/:id");
            this.getAuthors();
          //  this.getAuthorById($stateParams[`id`]);
            
        
        }

    }
    //----------------------------Add-AuthorController------------->>>

    export class AddAuthorController {
        private AddAuthorResource;
        public AddAuthor;

        public save() {
            this.AddAuthorResource.save(this.AddAuthor).$promise
                .then(() => {
                    this.$state.go(`home`);
                    this.AddAuthor = null;

                });
        }

        constructor(
            private $resource: angular.resource.IResourceService,  
            private $state: ng.ui.IStateService
        ) {
            this.AddAuthorResource = $resource(`/api/author`);
         
        }

    }

    //---------------------------BookLIst by Author------------->>>

    export class AuthorBookListController {
        private AuthorResource;
        public author;

        public getAuthorById(id: number)
        {
            this.author = this.AuthorResource.get({ id: id });
            console.debug(this.author);
    }

        constructor(
            private $resource: angular.resource.IResourceService,
            private $stateParams: ng.ui.IStateParamsService 
        ) {
            this.AuthorResource = $resource(`/api/authors/:id`);
            this.getAuthorById($stateParams[`id`]);
        }

    }
    //-----------------------------------------Edit-AuthorController---------------->>

    export class AuthorEditController {
        private AuthorResource;
        public author;


        public getAuthorById(id: number) {
            this.author = this.AuthorResource.get({ id: id });

        }
        public save() {
            this.AuthorResource.save(this.author).$promise
                .then(() => {
                    this.$state.go(`home`);
                    this.author = null;

                });
        }

        constructor(
            private $resource: angular.resource.IResourceService,
            private $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService
        ) {
            this.AuthorResource = $resource(`/api/books/:id`);
            this.getAuthorById($stateParams[`id`]);


        }

    }
    //----------------Delete-Author Controller------------------>>>>

    export class AuthorDeleteController {
        private AuthorResource;
        public author;


        public getAuthorById(id: number) {
            this.author = this.AuthorResource.get({ id: id });

        }
        public delete() {
            this.AuthorResource.delete(this.author).$promise
                .then(() => {
                    this.$state.go(`home`);
                    this.author = null;

                });
        }

        constructor(
            private $resource: angular.resource.IResourceService,
            private $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService
        ) {
            this.AuthorResource = $resource(`/api/books/:id`);
            this.getAuthorById($stateParams[`id`]);

        }

    }
}


