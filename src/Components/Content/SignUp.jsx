import { Input, Button } from "antd";
const SignUp = () => {
  return (
    <div className="h-screen flex justify-center pt-20">
      <ul>
        <li name="name">
          <label htmlFor="name">Name</label>
          <Input placeholder="Enter your name"></Input>
        </li>
        <li name="family" className="mt-3">
          <label htmlFor="family">Family</label>
          <Input placeholder="Enter your family "></Input>
        </li>
        <li name="age" className="mt-3">
          <label htmlFor="age">Age</label>
          <Input placeholder="Enter your age"></Input>
        </li>
        <li name="Mail" className="mt-3">
          <label htmlFor="Mail">Mail</label>
          <Input placeholder="Enter your Mail"></Input>
        </li>
        <li name="Number" className="mt-3">
          <label htmlFor="Number">Number</label>
          <Input placeholder="Enter your Number"></Input>
        </li>
        <li name="UserName" className="mt-3">
          <label htmlFor="UserName">UserName</label>
          <Input placeholder="Enter your UserName"></Input>
        </li>
        <li name="Password" className="mt-3">
          <label htmlFor="Password">Password</label>
          <Input placeholder="Enter your Password"></Input>
        </li>
        <li name="ConfirmPassword" className="mt-3">
          <label htmlFor="ConfirmPassword">Confirm Password</label>
          <Input placeholder="Enter your ConfirmPassword"></Input>
        </li>
        <Button className="mt-3" type="primary">
          Sign Up
        </Button>
      </ul>
    </div>
  );
};
export default SignUp;
