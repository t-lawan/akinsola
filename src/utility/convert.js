import { PageModel } from "../models/PageModel";
import { NavbarLinkModel } from "../models/NavbarLinkModel";
import { PageLinkModel } from "../models/PageLinkModel";
import { PageInfoModel } from "../models/PageInfoModel";

export class Convert {

    static toPageModel = contentfulModel => {
        return new PageModel(
            contentfulModel.contentful_id,
            contentfulModel.title,
            contentfulModel.slug,
            contentfulModel.description,
            contentfulModel.contentList
        );
    }

    static toPageInfoModel = contentfulModel => {
        let navbarList = []
        if(contentfulModel.navbarList){
            contentfulModel.navbarList.forEach((navbar) => {
                let nv = new NavbarLinkModel(navbar.contentful_id, navbar.title, navbar.page);
                navbarList.push(nv);
            });
        }

        let images = [];
        if(contentfulModel.images){
            contentfulModel.images.forEach(image => {
                images.push(image.image)
            })
        }
        
        let exhibitions = [];
        if(contentfulModel.exhibitions){   
            contentfulModel.exhibitions.forEach(exhibition => {
                exhibitions.push(Convert.toExhibitionModel(exhibition))
            })
        }

        return new PageInfoModel(
            contentfulModel.contentful_id,
            contentfulModel.title,
            contentfulModel.description.description,
            images,
            navbarList,
            exhibitions,
            contentfulModel.awards,
            contentfulModel.education
        )
    }

    static toExhibitionModel = contentfulModel => {
        return {
            title: contentfulModel.title,
            type: contentfulModel.type,
            date: contentfulModel.date,
            space: contentfulModel.space,
            location: contentfulModel.location,
            workTitle: contentfulModel.workTitle,
            year: contentfulModel.date ? new Date(contentfulModel.date).getFullYear() : null
        }
    }

    static toIntroductionModel = contentfulModel => {
        return {
            title: contentfulModel.title,
            description: contentfulModel.description,
        }
    }

    static toNavbarLinkModel = contentfulModel => {
        let page = new PageLinkModel(contentfulModel.page.contentful_id, contentfulModel.page.title, contentfulModel.page.slug)
        return new NavbarLinkModel(
            contentfulModel.contentful_id,
            contentfulModel.title,
            page,
        )
    }

    static toNavbarLinkList = data => {
        let navbar_links = []

        data.forEach((navbar) => {
            let nv = Convert.toNavbarLinkModel(navbar);
            navbar_links.push(nv);
        });

        return navbar_links
    }
    static toModelArray = (query, modelConverter) => {
        const modelArray = []
        query.edges.forEach((contentfulModel) => {
          let model = modelConverter(contentfulModel.node)
          modelArray.push(model)
        });
        return modelArray;
      }
}