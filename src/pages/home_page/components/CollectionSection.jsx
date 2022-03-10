import collection_img from "./../../../assets/images/collection_item_img.jpeg";
import { CollectionItem } from "./CollectionItem";
import { CollectionContent } from "./CollectionContent";

export const CollectionSection = ({collection_bg_url2, collection_bg_url}) => {
  return (
    <section className="collection-section">
      <h1>Get inspired by our Collections</h1>

      <div className="collection-cont grid-2">
        <CollectionItem bg_img={collection_bg_url}>
          <CollectionContent
            tag="Colors"
            heading="Color of the year'22 - Very Peri"
            subtitle="19 artworks"
            img={collection_img} />
        </CollectionItem>
        <CollectionItem bg_img={collection_bg_url2}>
          <CollectionContent
            tag="Colors"
            heading="Art and Antiquity"
            subtitle="5 artwork"
            img={collection_img} />
        </CollectionItem>
      </div>
    </section>
  );
};
