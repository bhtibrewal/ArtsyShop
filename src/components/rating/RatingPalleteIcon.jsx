export const RatingPalleteIcon = ({ rating }) => {
  return (
    <div className="artsy-rating-sec">
      {Array(rating)
        .fill()
        .map(() => {
          return <i className="fa-solid fa-palette filled"></i>;
        })}
    </div>
  );
};
