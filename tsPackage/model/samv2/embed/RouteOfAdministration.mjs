export class RouteOfAdministration {
    constructor(partial) {
        this.name = undefined;
        this.standardRoutes = [];
        if ('name' in partial)
            this.name = partial.name;
        if ('standardRoutes' in partial && partial.standardRoutes !== undefined)
            this.standardRoutes = partial.standardRoutes;
    }
}
//# sourceMappingURL=RouteOfAdministration.mjs.map