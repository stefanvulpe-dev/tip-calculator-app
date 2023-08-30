export function RadioTipButton({
  id,
  label,
  onTipChange,
  inputRef,
}: {
  id: string;
  label: number;
  onTipChange: React.Dispatch<React.SetStateAction<number>>;
  inputRef: React.RefObject<HTMLInputElement>;
}) {
  return (
    <>
      <input
        id={id}
        type="radio"
        name="radioGroup"
        value={label}
        onChange={(e) => {
          onTipChange(Number(e.target.value));
          if (inputRef.current?.value !== '') {
            inputRef.current!.value = '';
            inputRef.current!.classList.remove('invalid');
          }
        }}
        hidden
      />
      <label
        htmlFor={id}
        className="text-neutral-500 text-center bg-neutral-100 text-2xl font-bold px-8 py-2 rounded-md transition-all hover:bg-primary hover:text-neutral-100 focus:outline-primary"
      >
        {label}%
      </label>
    </>
  );
}
