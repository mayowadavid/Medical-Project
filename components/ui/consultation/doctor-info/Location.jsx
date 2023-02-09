import { RegularText } from "../../core/Text";

const Location = () => {
  return (
    <div>
      <RegularText>Location</RegularText>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.907878010109!2d-122.29058584909824!3d37.80240987909853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e7b7b6c7a8d%3A0x3b8f7b7b7b7b7b7b7!2s747+52nd+St%2C+Oakland%2C+CA+94609%2C+USA!5e0!3m2!1sen!2sin!4v1559240982994!5m2!1sen!2sin"
        width="100%"
        height="200"
        allowFullScreen=""
        loading="lazy"
        title="Google Maps"
        className="border border-slate-300 rounded-md shadow-sm"
      />
    </div>
  );
};

export default Location;
