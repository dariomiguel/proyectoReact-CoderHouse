import { useState } from "react";

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirm = (event) => {
    event.preventDefault();
    const userData = {name, phone, email,};

    onConfirm(userData);
  };

  return (
    <div className="container">
      <form onSubmit={handleConfirm} className="box">
        <div className="field">
          <label className="label">Nombre:</label>
          <div className="control">
            <input className="input" type="text" value={name} onChange={({ target }) => setName(target.value)} required/>
          </div>
        </div>

        <div className="field">
          <label className="label">Teléfono:</label>
          <div className="control">
            <input className="input" type="text" value={phone} onChange={({ target }) => setPhone(target.value)} required/>
          </div>
        </div>

        <div className="field">
          <label className="label">Email:</label>
          <div className="control">
            <input className="input" type="email" value={email} onChange={({ target }) => setEmail(target.value)} required/>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <button type="submit" className="button is-primary">
              Crear Orden
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
