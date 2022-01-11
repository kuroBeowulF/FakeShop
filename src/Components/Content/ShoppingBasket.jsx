import { Button, Rate } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  RemoveProFromBasket,
  CountUp,
  CountDown,
} from "../../Redux/Actions/Actions";

const ShoppingBasket = () => {
  const dispatch = useDispatch();
  const { selectedProducts } = useSelector((state) => state.Basket);

  const ComputeTotalPrice = (arry) => {
    let total = 0;
    arry.forEach((item) => (total += item.totalPrice));

    return total;
  };

  return (
    <>
      <div className="w-full h-48 flex justify-center items-center 2xl:text-2xl lg:text-base text-xs font-bold text-green-500">
        Total Payment :
        <span className="text-red-500 ml-3">
          {ComputeTotalPrice(Object.values(selectedProducts)).toFixed(2)} $
        </span>
        <Button className="ml-4 w-44 h-10">Pay it</Button>
      </div>
      <div className="basket min-h-screen w-4/5 mx-auto my-5">
        {Object.values(selectedProducts).length
          ? Object.values(selectedProducts).map((item) => (
              <div
                key={item.id}
                className="w-full border-2 border-slate-300 my-5 xl:h-96 h-1/2 flex xl:flex-row flex-col justify-between items-center"
              >
                <img
                  src={item.image}
                  alt="Zzz!!"
                  className="h-full w-1/4 p-5"
                />
                <div className="xl:w-2/4 w-3/4 p-5">
                  <div className="xl:text-xl lg:text-lg md:text-base text-ms mt-4">
                    {item.title}
                  </div>
                  <div className="xl:text-base text-xs mt-3">
                    {item.description}
                  </div>
                  <div className="text-xl mt-3">
                    <Rate allowHalf defaultValue={item.rating.rate} />
                  </div>
                  <div className="md:text-xl text-lg mt-3">
                    Price : {item.price}$
                  </div>
                  <div className="sm:text-xl text-xs mt-3 h-20 w-3/4 flex items-center">
                    Count : {item.count}{" "}
                    <div className="ml-12">
                      <div
                        className="count bg-green-500"
                        onClick={() => dispatch(CountUp(item))}
                      >
                        Up
                      </div>
                      <div
                        className="count bg-red-500"
                        onClick={() => dispatch(CountDown(item))}
                      >
                        Down
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/4 w-2/4 p-5 flex flex-col justify-center items-center">
                  <Button
                    className="w-44"
                    onClick={() => dispatch(RemoveProFromBasket(item))}
                  >
                    Remove Product
                  </Button>
                  <div className="mt-3 lg:text-lg text-sm font-bold">
                    Total Price : {item.totalPrice}$
                  </div>
                </div>
              </div>
            ))
          : ""}
      </div>
    </>
  );
};
export default ShoppingBasket;
