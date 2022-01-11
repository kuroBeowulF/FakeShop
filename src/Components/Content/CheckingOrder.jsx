import { Steps } from "antd";
const { Step } = Steps;

const CheckingOrder = () => {
  return (
    <div className="CheckingStepsBox min-h-screen">
      <div className="CheckingSteps">
        <Steps current={1}>
          <Step title="Finished" description="This is a description." />
          <Step
            title="In Progress"
            subTitle="Left 00:00:08"
            description="This is a description."
          />
          <Step title="Waiting" description="This is a description." />
          <Step title="Waiting" description="This is a description." />
          <Step title="Waiting" description="This is a description." />
        </Steps>
      </div>
    </div>
  );
};
export default CheckingOrder;
