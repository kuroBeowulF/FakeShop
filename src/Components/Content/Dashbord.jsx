import { Table, Button, Modal, Skeleton, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import DoFetch from "../../Redux/Actions/DoFetch";
const Dashbord = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);

  const [updated, setUpdated] = useState({});
  const [addNew, setAddNew] = useState({});
  console.log(addNew);
  console.log(updated);
  const { data, loading } = useSelector((state) => state.Fetch);
  const dispatch = useDispatch();
  const RemoveFunc = (id) => {
    dispatch(DoFetch.removeProduct(id));
    alert(
      `Product with ID : ${id} , successfully removed From Data , but FakeStoreApi do not suport Delete and Update`
    );
  };
  const showModalAddNew = () => {
    setIsModalVisible2(true);
  };

  const handleOkAddNew = () => {
    setIsModalVisible2(false);
    dispatch(
      DoFetch.addNewProduct(
        addNew.title,
        addNew.price,
        addNew.description,
        addNew.image,
        addNew.category
      )
    );
    setAddNew({});
  };

  const handleCancelAddNew = () => {
    setIsModalVisible2(false);
    setAddNew({});
  };

  const showModal = (id) => {
    setIsModalVisible(true);
    setUpdated({ ...updated, id: id });
  };

  const handleOk = () => {
    setIsModalVisible(false);
    dispatch(
      DoFetch.updateProduct(
        updated.id,
        updated.price,
        updated.description,
        updated.image,
        updated.category
      )
    );
    setUpdated({});
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setUpdated({});
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Image",
      dataIndex: "image",
      render: (image) => (
        <img key={data.id} width="50" height="50" src={image} alt="zzz!!" />
      ),
    },
    {
      title: "Remove",
      dataIndex: "id",
      key: "id",
      render: (id) => <Button onClick={() => RemoveFunc(id)}>Remove</Button>,
    },
    {
      title: "Edit",
      dataIndex: "id",
      key: "id",
      render: (id) => <Button onClick={() => showModal(id)}>Edit</Button>,
    },
  ];
  if (loading) return <Skeleton className="min-h-screen" />;
  if (!loading)
    return (
      <div className="min-h-screen">
        <Modal
          title="Add New Product"
          visible={isModalVisible2}
          onOk={handleOkAddNew}
          onCancel={handleCancelAddNew}
        >
          <Input
            value={addNew.title}
            onChange={(e) => setAddNew({ ...addNew, title: e.target.value })}
            placeholder="Enter Title"
          ></Input>
          <Input
            style={{ marginTop: 5 }}
            value={addNew.price}
            onChange={(e) => setAddNew({ ...addNew, price: e.target.value })}
            placeholder="Enter Price"
          ></Input>
          <Input
            style={{ marginTop: 5 }}
            value={addNew.description}
            onChange={(e) =>
              setAddNew({ ...addNew, description: e.target.value })
            }
            placeholder="Enter Description"
          ></Input>
          <Input
            style={{ marginTop: 5 }}
            value={addNew.image}
            onChange={(e) => setAddNew({ ...addNew, image: e.target.value })}
            placeholder="Enter imageAdress"
          ></Input>
          <Input
            style={{ marginTop: 5 }}
            value={addNew.category}
            onChange={(e) => setAddNew({ ...addNew, category: e.target.value })}
            placeholder="Enter Category"
          ></Input>
        </Modal>
        <Modal
          title="Edit Product"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Input
            value={updated.title}
            onChange={(e) => setUpdated({ ...updated, title: e.target.value })}
            placeholder="Enter Title"
          ></Input>
          <Input
            style={{ marginTop: 5 }}
            value={updated.price}
            onChange={(e) => setUpdated({ ...updated, price: e.target.value })}
            placeholder="Enter Price"
          ></Input>
          <Input
            style={{ marginTop: 5 }}
            value={updated.description}
            onChange={(e) =>
              setUpdated({ ...updated, description: e.target.value })
            }
            placeholder="Enter Description"
          ></Input>
          <Input
            style={{ marginTop: 5 }}
            value={updated.image}
            onChange={(e) => setUpdated({ ...updated, image: e.target.value })}
            placeholder="Enter imageAdress"
          ></Input>
          <Input
            style={{ marginTop: 5 }}
            value={updated.category}
            onChange={(e) =>
              setUpdated({ ...updated, category: e.target.value })
            }
            placeholder="Enter Category"
          ></Input>
        </Modal>
        <div className="w-5/6 h-1/6 mx-auto mt-12">
          <Button onClick={showModalAddNew}>Add New</Button>
        </div>
        <Table
          dataSource={data}
          columns={columns}
          className="border-2 border-gray w-5/6 h-5/6 mx-auto my-12"
        />
        ;
      </div>
    );
};
export default Dashbord;
