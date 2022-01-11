import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import CardItem from "./CardItem";
import { Row, Col, Skeleton } from "antd";
import DoFetch from "../../Redux/Actions/DoFetch";

const ProductsList = () => {
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector((state) => state.Fetch);
  useEffect(() => {
    dispatch(DoFetch.doFetch(""));
  }, []);

  if (loading || data.length === 0)
    return <Skeleton className="min-h-screen" />;
  if (error) return <div className="min-h-screen">{error}</div>;
  if (data.length) {
    return (
      <>
        <div className="w-full h-20 flex items-center justify-center text-slate-700 text-xl font-bold">
          Chose Your product{" "}
        </div>
        <Row className="flex md:justify-between justify-center w-5/6 mx-auto my-5 border-2 border-slate-700 rounded-lg min-h-screen">
          {data.map((item) => (
            <Col key={item.id}>
              <CardItem item={item} />
            </Col>
          ))}
        </Row>
      </>
    );
  }
};
export default ProductsList;
