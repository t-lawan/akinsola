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
            contentfulModel.type,
            contentfulModel.description,
            contentfulModel.images,
            contentfulModel.order,
            contentfulModel.projectType,
            contentfulModel.videoLink
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

        return new PageInfoModel(
            contentfulModel.contentful_id,
            contentfulModel.title,
            navbarList
        )
    }

    static toNavbarLinkModel = contentfulModel => {
        let page = new PageLinkModel(contentfulModel.page.contentful_id, contentfulModel.page.title, contentfulModel.page.projectType, contentfulModel.page.slug)
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