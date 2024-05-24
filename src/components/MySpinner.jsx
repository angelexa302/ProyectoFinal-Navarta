import BounceLoader from "react-spinners/BounceLoader";

function MySpinner() {
  return (
    <div
      style={{
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <BounceLoader color="rgb(218, 131, 140)" />
    </div>
  );
}
export default MySpinner;
