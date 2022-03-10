

export const CollectionContent = ({ tag, heading, subtitle, img }) => {
  const item = [1, 2, 3];
  return (
    <div className="collection-content">
      <div className="collection-text">
        <span className="btn collection-tag">{tag}</span>
        <div>
          <h3>{heading}</h3>
          <p>{subtitle}</p>
        </div>
      </div>
      <div className="collection-artworks flex-col">
        {item.map(() => {
          return (
            <div className="collection-artwork-item" key=''>
              <img src={img} alt='' />
            </div>
          );
        })}
      </div>
    </div>
  );
};
