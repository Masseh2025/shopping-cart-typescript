function CartList() {
  return (
    <div className="bg-white text-rose-900 p-4 m-4 rounded-md">
      <h2 className="text-red text-2xl font-bold">Your Cart (x)</h2>
      <ul>
        <li>Example item</li>
      </ul>
      <p>Order Total</p>
      <button>Confirm order</button>
    </div>
  );
}

export { CartList };
