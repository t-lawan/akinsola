import { PageModel } from "../models/PageModel";
import { NavbarLinkModel } from "../models/NavbarLinkModel";
import { PageLinkModel } from "../models/PageLinkModel";

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

    static toNavbarLinkModel = contentfulModel => {
        let page = new PageLinkModel(contentfulModel.page.contentful_id, contentfulModel.page.title, contentfulModel.page.projectType, contentfulModel.page.slug)
        return new NavbarLinkModel(
            contentfulModel.contentful_id,
            contentfulModel.title,
            contentfulModel.order,
            page,
        )
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