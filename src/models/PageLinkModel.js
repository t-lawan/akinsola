export class PageLinkModel {
    id;
    title;
    slug;
    type;
    constructor(id, title, type, slug) {
        this.id = id;
        this.title = title;
        this.type = type;
        this.slug = slug;
    }

}