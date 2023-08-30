import { forwardRef } from 'react';

export const CustomTipButton = forwardRef(function (
  {
    id,
    label,
    onTipChange,
  }: {
    id: string;
    label: 'custom';
    onTipChange: React.Dispatch<React.SetStateAction<number>>;
  },
  ref: React.ForwardedRef<HTMLInputElement>
) {
  return (
    <>
      <input
        ref={ref}
        id={id}
        type="text"
        placeholder="custom"
        onChange={(e) => {
          if (!(Number(e.target.value) > 0)) {
            e.target.classList.add('invalid');
          } else {
            onTipChange(Number(e.target.value));
            e.target.classList.remove('invalid');
          }
        }}
        onClick={(e) => {
          const input = document.querySelector<HTMLInputElement>(
            'input[type="radio"]:checked'
          );
          if (input) {
            input.checked = false;
          }
          const element = e.target as HTMLInputElement;
          if (element.value.includes('%')) {
            element.value = element.value.replace('%', '');
          }
        }}
        onBlur={(e) => {
          if (e.target.value !== '' && Number(e.target.value) > 0) {
            e.target.value = `${e.target.value}%`;
          } else if (e.target.value === '') {
            e.target.classList.remove('invalid');
          }
        }}
        className="py-2 capitalize text-center text-2xl rounded-md text-neutral-100 font-bold bg-neutral-500 outline-0 focus:ring-2 focus:ring-primary"
      />
      <label htmlFor={id} hidden>
        {label}%
      </label>
    </>
  );
});
