import TextPressure from "./TextPressure.jsx";

// Note:
// Make sure the font you're using supports all the variable properties.
// React Bits does not take responsibility for the fonts used

const TextPressureDemo = () => {
  return (
    <div className="relative  min-h-[clamp(250px,30vh,400px)] lg:min-h-[50vh]">
      <TextPressure
        text="New!"
        flex={true}
        alpha={false}
        stroke={false}
        width={true}
        weight={true}
        italic={true}
        textColor="#ffffff"
        strokeColor="#ff0000"
        minFontSize={30}
      />
    </div>
  );
};

export default TextPressureDemo;
