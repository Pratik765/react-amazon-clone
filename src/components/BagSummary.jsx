import { useSelector } from "react-redux";

const BagSummary = () => {
  let totalMRP = 0;
  let CONVENIENCE_FEES = 99;
  const bagItem = useSelector((store) => store.bag);
  const totalItem = bagItem.length;
  const item = useSelector((store) => store.item);
  const finalItems = item.filter((item) => {
    const itemIndex = bagItem.indexOf(item.id);
    return itemIndex >= 0;
  });
  finalItems.forEach((bagItem) => {
    totalMRP += bagItem.price;
  });
  let finalAmount = totalMRP + CONVENIENCE_FEES;
  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP.toFixed(2)}</span>
        </div>

        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">
            ₹{bagItem.length == 0 ? 0 : 99}
          </span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">
            ₹{bagItem.length == 0 ? 0 : finalAmount}
          </span>
        </div>
      </div>
      <button className="btn-place-order">PLACE ORDER</button>
    </div>
  );
};
export default BagSummary;
