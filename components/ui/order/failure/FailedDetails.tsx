import { Button } from "../../core/Buttons";
import { FadedMediumText, SubHeadingText } from "../../core/Text";
import Container from "../../layouts/Container";

const FailedDetails = () => {
  return (
    <Container>
      <div className="text-center my-12">
        <SubHeadingText>Order Failed</SubHeadingText>
        <FadedMediumText>
          There was an error and your order could not be placed. Please try
          again.
        </FadedMediumText>
        <Button primary full classes="mt-6" href="home">
          Go to home
        </Button>
      </div>
    </Container>
  );
};

export default FailedDetails;
