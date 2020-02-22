export class PageModel {
    id;
    title;
    slug;
    type;
    description;
    images;
    order;
    projectType;
    videoLink;
    constructor(id, title, slug, type, description, images, order, projectType, videoLink) {
        this.id = id;
        this.title = title;
        this.slug = slug;
        this.type = type;
        this.description = description;
        this.images = images;
        this.order = order;
        this.projectType = projectType;
        this.videoLink = videoLink;
    }

}