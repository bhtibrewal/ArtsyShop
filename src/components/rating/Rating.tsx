export const Rating = ({ rating }: { rating: Number }) => {
  return (
    <div className="artsy-rating">
      {Array(rating)
        .fill(0)
        .map((e, index) => {
          return <i key={index} className="fa-solid fa-star filled"></i>;
        })}
    </div>
  );
};
