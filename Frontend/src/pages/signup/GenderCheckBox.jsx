const GenderCheckBox = ({ handleCheckbox, input }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            input === "male" ? "selected" : ""
          }`}
        >
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={input === "male"}
            onChange={() => handleCheckbox("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            input === "female" ? "selected" : ""
          }`}
        >
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={input === "female"}
            onChange={() => handleCheckbox("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
