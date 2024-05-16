import Item from "./Item";
import { useSelector } from "react-redux";

const ItemsContainer = () => {
  const item = useSelector((store) => store.item);
  return (
    <>
      <div className="shop-container-main">
        {item.map((currItem) => {
          return <Item item={currItem} key={currItem.id} />;
        })}
      </div>
    </>
  );
};
export default ItemsContainer;
