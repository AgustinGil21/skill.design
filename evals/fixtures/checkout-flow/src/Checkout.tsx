export function Checkout() {
  return (
    <form>
      <h2>Checkout</h2>
      <input placeholder="Email" />
      <input placeholder="Card number" />
      <div style={{ display: 'flex' }}><input placeholder="MM/YY" /><input placeholder="CVC" /></div>
      <label><input type="checkbox" defaultChecked /> Subscribe to our newsletter</label>
      <p style={{ color: '#aaa', fontSize: 12 }}>Shipping and taxes calculated after payment.</p>
      <div onClick={() => {}} style={{ background: '#2563eb', color: '#fff', padding: 8 }}>Submit</div>
    </form>
  );
}
