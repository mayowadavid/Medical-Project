import {
  FadedSmallText,
  MediumText,
  RegularText,
  SmallText,
} from "../../core/Text";

const ReviewCard = ({ review }) => {
  return (
    <div className="my-2 border-b border-gray-300">
      <div className="flex justify-between items-center my-1">
        <div className="flex">
          <img src={review.imageUrl} alt="myhc" width={30} height={30} />
          <div className="mx-2">
            <SmallText>{review.reviewer}</SmallText>
            <FadedSmallText>{review.duration}</FadedSmallText>
          </div>
        </div>
        <div>Rating</div>
      </div>
      <div className="mb-2">
        <MediumText>{review.title}</MediumText>
        <FadedSmallText>{review.content}</FadedSmallText>
      </div>
    </div>
  );
};

const DoctorReviews = ({ doctorData }) => {
  return (
    <div className="my-4">
      <RegularText>Doctor Reviews</RegularText>
      <div className="my-2">Rating</div>
      {doctorData?.reviews?.map((review) => (
        <ReviewCard review={review} key={review.id} />
      ))}
    </div>
  );
};

export default DoctorReviews;
