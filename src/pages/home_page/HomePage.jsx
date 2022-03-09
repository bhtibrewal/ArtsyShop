import "./home_page.css";
import collection_img from "./../../assets/images/collection_item_img.jpeg"
import { ButtonPrimary } from "../../components/Button";

const Categories = ({ link, category, img_url }) => {
  return (
    <a href={link}>
      <div class="categories">
        <img src={img_url} />
        <button class="btn category-name">{category}</button>
      </div>
    </a>
  );
};
const CollectionContent = ({ tag, heading, subtitle, img }) => {
  const item = [1, 2, 3];
  return (
    <div class="collection-content">
      <div class="collection-text">
        <span class="btn collection-tag">{tag}</span>
        <div>
          <h3>{heading}</h3>
          <p>{subtitle}</p>
        </div>
      </div>
      <div class="collection-artworks flex-col">
        {item.map((i) => {
          return (
            <div class="collection-artwork-item">
              <img src={img} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
const CollectionItem = ({ bg_img, children }) => {
  return (
    <a href="" class="collection-items">
      <div class="collection-image">
        <img alt="collection image " class="collection-image" src={bg_img} />
      </div>
      {children}
    </a>
  );
};
export const HomePage = () => {
    
  const collection_bg_url =
    "https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiY29sbGVjdGlvbnNcL3YyXC9waWN0dXJlc1wvY3JvcHBlZFwvY292ZXJcL2Jhc2VcLzYwOTFfY292ZXJfNTE1OTFlNjE1MTczMGQ3NGQxNzFlN2ZhOTdjMjU3YzYuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NjIwLCJoZWlnaHQiOjQyMCwiZml0IjoiY292ZXIifSwidG9Gb3JtYXQiOiJqcGVnIiwianBlZyI6eyJxdWFsaXR5Ijo4MH19fQ==?signature=4a01e589d67a157e5a8512fb3743949df7d5612e96b02bd3b13ac924c1f72c9a";
  const collection_bg_url2 =
    "https://sh-cdn.singulart.com/eyJidWNrZXQiOiJzaW5ndWxhcnQtd2Vic2l0ZS1wcm9kIiwia2V5IjoiY29sbGVjdGlvbnNcL3YyXC9waWN0dXJlc1wvY3JvcHBlZFwvY292ZXJcL2Jhc2VcLzMyODdfY292ZXJfY2UwNjRmNjI2ZGE0NjI0MzI1MTA5YjRiMDVmZTgyNmYuanBlZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDY1LCJoZWlnaHQiOjMxNSwiZml0IjoiY292ZXIifSwidG9Gb3JtYXQiOiJqcGVnIiwianBlZyI6eyJxdWFsaXR5Ijo4MH19fQ==?signature=ce6e4956bbf7bd80c4bf6471ec041536f8543a032bd9c053fcc96ecc80c63b1c";
  const category_list = [
    "Abstraction",
    "Nature",
    "Landscape",
    "urban",
    "Street",
    "Medival",
    "Pop Culture",
    "Portrait",
  ];
  return (
    <main class="main">
      {/*  hero section */}
      <section class="hero-section grid-overlay">
        <div class="hero-img">
          <img
            alt="hero image"
            src="https://images.unsplash.com/photo-1606819717115-9159c900370b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFydCUyMGdhbGxlcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
          />
        </div>
        <div class="hero-overlay flex-col">
          <h2>Discover the creative universe of our artists.</h2>
          <ButtonPrimary >Discover</ButtonPrimary>
        </div>
      </section>

      {/* category section */}
      <section class="category-section">
        <h1>Categories</h1>
        <div class="grid-4 category-grid">
          {category_list.map((i) => {
            return (
              <Categories
                link={"/pages/product/product.html"}
                category={i}
                img_url={
                  "https://cdn.singulart.com/artworks/v2/cropped/3813/main/carousel/1202203_f053297adb8623bd3c615562c7521b67.jpeg"
                }
              />
            );
          })}
        </div>
      </section>

      {/* collection section  */}
      <section class="collection-section">
        <h1>Get inspired by our Collections</h1>

        <div class="collection-cont grid-2">
          <CollectionItem bg_img={collection_bg_url}>
            <CollectionContent
              tag="Colors"
              heading="Color of the year'22 - Very Peri"
              subtitle="19 artworks"
              img={collection_img}
            />
          </CollectionItem>
          <CollectionItem bg_img={collection_bg_url2}>
            <CollectionContent
              tag="Colors"
              heading="Art and Antiquity"
              subtitle="5 artwork"
              img={collection_img}
            />
          </CollectionItem>
        </div>
      </section>
    </main>
  );
};
