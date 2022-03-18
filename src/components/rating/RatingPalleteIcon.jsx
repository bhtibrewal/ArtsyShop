export const RatingPalleteIcon = ({ rating }) => {
  return (
    <div className="artsy-rating-sec">
      {Array(rating)
        .fill()
        .map((e, index) => {
          return <i key={index} className="fa-solid fa-palette filled"></i>;
        })}
    </div>
  );
};
