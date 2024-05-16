import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemAction } from "../store/itemSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://fakestoreapi.com/products/", { signal })
      .then((res) => res.json())
      .then((items) => {
        dispatch(itemAction.addInitialItems(items));
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);
  return <></>;
};
export default FetchItems;
