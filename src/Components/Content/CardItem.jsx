import { Card } from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SelectProduct } from "../../Redux/Actions/Actions";
const { Meta } = Card;
const CardItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <Link to={`/Product/${item.id}`}>
      <Card
        hoverable
        onClick={() => dispatch(SelectProduct(item))}
        style={{ width: 240, height: 380, margin: 25, borderRadius: 10 }}
        cover={
          <img
            alt="example"
            src={item.image}
            style={{ padding: 10, width: 220, height: 280 }}
          />
        }
      >
        <Meta title={item.title} description={`${item.price} $`} />
      </Card>
    </Link>
  );
};
export default CardItem;
