export class PageInfoModel {
    id;
    title;
    description;
    images;
    navbar_list;
    exhibitions;
    awards;
    education;
    constructor(id, title, description, images, navbar_list, exhibitions, awards, education) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.images = images;
        this.navbar_list = navbar_list;
        this.exhibitions = exhibitions;
        this.awards = awards;
        this.education = education;
    }

}