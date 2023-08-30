export function Input({
  id,
  label,
  backgroundImage,
  value,
  onChange,
}: {
  id: string;
  label: string;
  backgroundImage: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="w-4/5 mx-auto my-5 lg:first:row-start-1 lg:first:row-end-2 lg:row-start-3 lg:row-end-4 lg:my-auto">
      <div className="flex justify-between items-center">
        <label
          htmlFor={id}
          className="font-bold block my-2 text-sm text-neutral-300"
        >
          {label}
        </label>
        <p className="error-para | text-xs font-bold text-orange-500 hidden">
          Can't be zero or negative
        </p>
      </div>
      <input
        id={id}
        type="number"
        placeholder="0"
        value={value === 0 ? '' : value}
        onChange={onChange}
        className={`w-full text-right text-neutral-100 px-3 py-2 text-2xl font-bold block border-0 rounded-md focus:outline-primary bg-neutral-500 ${backgroundImage} bg-left-1/2 bg-no-repeat bg-scroll`}
      />
    </div>
  );
}
