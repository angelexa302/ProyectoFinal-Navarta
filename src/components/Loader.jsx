import MySpinner from "./MySpinner";

function Loader({ loading }) {
  return <div>{loading ? <MySpinner /> : null}</div>;
}
export default Loader;
