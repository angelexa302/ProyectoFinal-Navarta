import cart from "/src/assets/cart.svg";
import { useCart } from "../context/carContext";

const CartWidget = () => {
  const { itemCount } = useCart();

  return (
    <>
      <div style={{ position: "relative" }}>
        <img src={cart} alt="CartWidget" />
        <span
          style={{
            position: "absolute",
            top: "19px",
            right: "32px",
            background: "red",
            borderRadius: "50%",
            color: "white",
            padding: "1px 6px",
            fontSize: "0.75rem",
            fontWeight: "bold",
          }}
        >
          {itemCount}
        </span>
      </div>
    </>
  );
};
export default CartWidget;
