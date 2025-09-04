import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/slices/cart-slice";

const CartTile = ({ cartItem }) => {
  const dispatch = useDispatch();

  function handleRemove() {
    dispatch(removeFromCart(cartItem.id));
  }

  return (
    <div className="flex items-center justify-between p-5 bg-gray-200 mt-2 mb-2 rounded-xl">
      <div className="flex p-3">
        <img
          src={cartItem.image}
          alt={cartItem.title}
          className="h-32 w-32 object-contain rounded-lg"
        />
        <div className="ml-10 self-start space-y-2">
          <h1 className="text-lg font-bold">{cartItem.title}</h1>
          <p className="text-md font-semibold text-gray-800">
            ₹{cartItem.price}
          </p>
        </div>
      </div>

      <button
        onClick={handleRemove}
        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 cursor-pointer"
      >
        Remove
      </button>
    </div>
  );
};

export default CartTile;
