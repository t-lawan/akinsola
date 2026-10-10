export class PageInfoModel {
    id;
    title;
    description;
    images;
    navbar_list;
    constructor(id, title, description, images, navbar_list) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.images = images;
        this.navbar_list = navbar_list;
    }

}