export class PageModel {
    id;
    title;
    slug;
    type;
    description;
    images;
    order;
    constructor(id, title, slug, type, description, images, order) {
        this.id = id;
        this.title = title;
        this.slug = slug;
        this.type = type;
        this.description = description;
        this.images = images;
        this.order = order;

    }

}