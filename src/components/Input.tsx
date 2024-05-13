export default function Input({
  label,
  name,
  ...rest
}: {
  label: string;
  name: string;
}) {
  return (
    <div className="grid gap-0.5">
      <label
        className="uppercase font-bold text-xs tracking-wide"
        htmlFor={label.replaceAll(" ", "_")}
      >
        {label}
      </label>
      <input
        className=" rounded-xl bg-slate-50 p-2 border-2 border-slate-950 focus:outline-none focus-visible:ring-2  ring-slate-950"
        type="text"
        id={name}
        name={name}
        {...rest}
      ></input>
    </div>
  );
}
