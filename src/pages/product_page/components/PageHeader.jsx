export const PageHeader = ({category}) => {
  return (
    <section className="page-header-section">
        <div className="section-bg">
          <img
            src={category?.banner_img}
            alt={`${category?.categoryName} Painting`}
          />
        </div>
        <div className="section-content">
          <h1>{category?.categoryName} Painting</h1>
        </div>
      </section>
  )
}
