export class PageInfoModel {
    id;
    title;
    description;
    images;
    navbar_list;
    exhibitions;
    constructor(id, title, description, images, navbar_list, exhibitions) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.images = images;
        this.navbar_list = navbar_list;
        this.exhibitions = exhibitions;
    }

}