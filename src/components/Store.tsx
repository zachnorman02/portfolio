import React from "react";
import "../styles/store.css";
import Modal from "./Modal";

require("dotenv").config();
const GSheetReader = require("g-sheets-api");

function Store() {
  const options = {
    apiKey: process.env.SHEETS_API_KEY,
    sheetId: process.env.SHEETS_LINK,
  };

  const content = [
    {
      'item': 'Instant Pot/Air Fryer Combo',
      'image': '',
    }
  ]

  const [selected, setSelected] = React.useState<string>('');

  function showForm(item: string) {

  }

  return (
    <div className="content">
      <h1>Store</h1>
      <div>
        {content.map((item) => {
          return (
            <button onClick={() => setSelected(item.item)}>{item.item}</button>
          );
        })}
      </div>
      {selected !== "" && (
        <Modal stateSetter={setSelected}>
          <p>hi</p>
        </Modal>
      )}
    </div>
  );
}

export default Store;
