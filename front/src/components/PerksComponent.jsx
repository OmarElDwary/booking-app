import React from "react";

const style = {
  checkboxs: "border border-[#2f3640] rounded p-2 flex flex-col gap-2",
  checkbox: "inline-flex gap-2 items-center",
  label: "text-[#2f3640]",
  input: "border border-[#2f3640] rounded p-2",
};
function PerksComponent({ seleced, onChange }) {
  return (
    <div>
      <label className={style.label} htmlFor="perks">
        Perks
      </label>
      <div className={style.checkboxs}>
        <div className={style.checkbox}>
          <input
            className={style.input}
            type="checkbox"
            id="wifi"
            name="wifi"
            value="wifi"
          />
          <label className={style.label} htmlFor="wifi">
            Wifi
          </label>
        </div>
        <div className={style.checkbox}>
          <input
            className={style.input}
            type="checkbox"
            id="kitchen"
            name="kitchen"
            value="kitchen"
          />
          <label className={style.label} htmlFor="kitchen">
            Kitchen
          </label>
        </div>
        <div className={style.checkbox}>
          <input
            className={style.input}
            type="checkbox"
            id="heating"
            name="heating"
            value="heating"
          />
          <label className={style.label} htmlFor="heating">
            Heating
          </label>
        </div>
        <div className={style.checkbox}>
          <input
            className={style.input}
            type="checkbox"
            id="freeParking"
            name="freeParking"
            value="freeParking"
          />
          <label className={style.label} htmlFor="freeParking">
            Free Parking
          </label>
        </div>
        <div className={style.checkbox}>
          <input
            className={style.input}
            type="checkbox"
            id="tv"
            name="tv"
            value="tv"
          />
          <label className={style.label} htmlFor="tv">
            TV
          </label>
        </div>
      </div>
    </div>
  );
}

export default PerksComponent;
