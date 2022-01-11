import { Button, Input } from "antd";
const LogPage = () => {
  return (
    <div className="h-screen flex justify-center pt-48">
      <ul className="border-2 border-gray p-10 h-2/5">
        <li name="username">
          <label htmlFor="username">User Name</label>
          <Input placeholder="Enter your User name"></Input>
        </li>
        <li name="Password" className="mt-3">
          <label htmlFor="Password">Password</label>
          <Input placeholder="Enter your family " required={true}></Input>
        </li>
        <Button className="mt-3">Log in</Button>
      </ul>
    </div>
  );
};
export default LogPage;
