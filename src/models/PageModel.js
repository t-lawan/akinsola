export class PageModel {
    id;
    title;
    slug;
    description;
    content;

    constructor(id, title, slug, description, content = []) {
        this.id = id;
        this.title = title;
        this.slug = slug;
        this.description = description;
        this.content = content;
    }

}