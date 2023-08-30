import { useRef } from 'react';
import { CustomTipButton } from '../components/CustomTipButton';
import { RadioTipButton } from '../components/RadioTipButton';

export function TipContainer({
  onTipChange,
}: {
  onTipChange: React.Dispatch<React.SetStateAction<number>>;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="w-4/5 mx-auto my-5 lg:row-start-2 lg:row-end-3">
      <p className="text-neutral-300 font-bold text-sm my-2">Select Tip %</p>
      <div className="grid gap-3 grid-cols-2 lg:grid-cols-3">
        <RadioTipButton
          id="five"
          label={5}
          onTipChange={onTipChange}
          inputRef={inputRef}
        />
        <RadioTipButton
          id="ten"
          label={10}
          onTipChange={onTipChange}
          inputRef={inputRef}
        />
        <RadioTipButton
          id="fifteen"
          label={15}
          onTipChange={onTipChange}
          inputRef={inputRef}
        />
        <RadioTipButton
          id="twentyfive"
          label={25}
          onTipChange={onTipChange}
          inputRef={inputRef}
        />
        <RadioTipButton
          id="fifty"
          label={50}
          onTipChange={onTipChange}
          inputRef={inputRef}
        />
        <CustomTipButton
          id="custom"
          label={'custom'}
          onTipChange={onTipChange}
          ref={inputRef}
        />
      </div>
    </div>
  );
}
