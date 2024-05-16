import { useSelector } from "react-redux";
import BagSummary from "./BagSummary";
import CartItem from "./CartItem";
import BagMessage from "./BagMessage";

const Bag = () => {
  const bagItem = useSelector((store) => store.bag);
  const item = useSelector((store) => store.item);
  const finalItems = item.filter((item) => {
    const itemIndex = bagItem.indexOf(item.id);
    return itemIndex >= 0;
  });
  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {bagItem.length === 0 ? (
            <BagMessage />
          ) : (
            finalItems.map((item) => {
              return <CartItem item={item} key={item.id} />;
            })
          )}
        </div>
        <BagSummary />
      </div>
    </main>
  );
};
export default Bag;
