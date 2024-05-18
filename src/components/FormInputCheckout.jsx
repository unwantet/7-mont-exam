export default function FormInputCheckout({
    type,
    defaultValue,
    name,
    label,
    size,
  }) {
    return (
      <div className="form-control">
        <label className="w-full ">
          <div className="label">
            <span className="label-text font-semibold capitalize">{label}</span>
          </div>
          <input
            type={type}
            name={name}
            placeholder={defaultValue}
            className={`input input-bordered w-full input-lg max-h-[56px] ${size}`}
          />
        </label>
      </div>
    );
  }
  