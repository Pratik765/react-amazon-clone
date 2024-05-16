import { useDispatch, useSelector } from "react-redux";
import { bagAction } from "../store/bagSlice";

const Item = ({ item }) => {
  const bagItem = useSelector((store) => store.bag);
  const element = bagItem.indexOf(item.id) >= 0;
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(bagAction.addToBag(item.id));
  };
  const handleRemove = () => {
    dispatch(bagAction.removeFromBag(item.id));
  };
  return (
    <>
      <div className="shop" key={item.image}>
        <div className="shop1 box">
          <div className="box1-content">
            <p className="heading">{item.title.substring(0, 40)}</p>
            <p>{item.description.substring(0, 100)}</p>
            <img className="box1-img img" src={item.image} alt="" />
            <p className="demo">
              <strong>Price ₹</strong> {item.price}
            </p>
            <p className="demo">
              <strong>Rating</strong> {item.rating.rate} |{item.rating.count} ⭐
            </p>
            <div className="btn">
              {element ? (
                <button className="btn-remove" onClick={handleRemove}>
                  Remove
                </button>
              ) : (
                <button className="btn-add" onClick={handleAdd}>
                  Add
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Item;
