import { useDispatch } from "react-redux";
import { bagAction } from "../store/bagSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleRemoveFromBag = () => {
    dispatch(bagAction.removeFromBag(item.id));
  };

  return (
    <>
      <div className="item">
        <div className="item-left-part">
          <img className="bag-item-img" src={item.image} />
        </div>
        <div className="item-right-part">
          <div className="company">{item.category}</div>
          <div className="item-name">{item.title}</div>
          <div className="price-container">
            <span className="current-price">Rs {item.price}</span>
            <span className="original-price">Rs 99</span>
            <span className="discount-percentage">(99% OFF)</span>
          </div>

          <div className="remove-from-cart" onClick={handleRemoveFromBag}>
            {/* <FaTrash /> */}
            <button>X</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default CartItem;
