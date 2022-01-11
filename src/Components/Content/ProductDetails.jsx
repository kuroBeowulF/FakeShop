import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Rate, Skeleton } from "antd";
import { useDispatch, useSelector } from "react-redux";
import DoFetch from "../../Redux/Actions/DoFetch";
import { SelectProductToBasket } from "../../Redux/Actions/Actions";

const ProductDetails = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const { selected, error, loading } = useSelector((state) => state.Fetch);

  useEffect(() => {
    dispatch(DoFetch.SelectFetch(slug));
  }, []);

  if (loading || selected.length === 0)
    return <Skeleton className="min-h-screen" />;
  if (error) return <div className="min-h-screen">{error}</div>;
  if (selected.length !== 0) {
    return (
      <div className="productDetailsBox flex justify-center items-center min-h-screen">
        <div className="h-1/3 w-4/5 flex justify-around xl:flex-row flex-col border-2 border-slate-900 p-5">
          <div className="h-full xl:w-1/3 w-4/5 xl:block flex justify-center text-slate-500 text-2xl">
            {selected.category}
          </div>
          <div className="xl:w-2/6 w-full h-1/2 p-5 flex justify-center items-center">
            <img
              src={selected.image}
              alt="something went wrong!!"
              className="imgBox xl:w-1/2 xl:h-1/2 w-1/3 h-4/5 "
            />
          </div>
          <div className="xl:w-1/2 w-full">
            <div className="mt-5">{selected.title}</div>
            <div className="proPrice">
              Price : {selected.price} ${" "}
              <Button
                className="proBtn"
                onClick={() => dispatch(SelectProductToBasket({ ...selected }))}
              >
                Add to Basket
              </Button>
            </div>
            <div className="proRate">
              <Rate allowHalf defaultValue={selected.rating.rate} />
            </div>
            <div className="proCount">Count : {selected.rating.count}</div>
            <div className="prodescription">{selected.description}</div>
          </div>
        </div>
      </div>
    );
  }
};
export default ProductDetails;
