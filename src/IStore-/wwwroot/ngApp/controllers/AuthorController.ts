export class AuthorController {
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
        this.AuthorResource = $resource(`/api/author/:id`);
        this.getAuthorById($stateParams[`id`]);
        console.debug(this.author);

    }

}
