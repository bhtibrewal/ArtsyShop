export const BasicCard = () => {
  return (
    <div class="card w-30 basic">
      <button class="icon favourite-icon">
        <i class="fa-regular fa-heart fa-2x"></i>
      </button>
      <div class="content">
        <img
          class="card-img"
          src="https://render.fineartamerica.com/images/images-new-artwork/images-medium-5/la-porta-rossa-sulla-salita-guido-borelli.jpg?v=2"
          alt=""
        />

        <div class="card-header">
          <h1>La Porta Rossa Sulla Salita Art Print</h1>
          <h2>by Guido Borelli</h2>
          <div class="card-body">
            Visit ten places on our planet that are undergoing the biggest
            changes today.
          </div>
          <div class="price-sec">
            <h3>$18</h3>
            <span class="strike-price">$22</span>
          </div>
        </div>
      </div>

      <div class="card-actions">
        <button class="btn btn-primary">
          <i class="fa-solid fa-cart-shopping"></i>
          add to cart
        </button>
      </div>
    </div>
  );
};
