import { AmountLabel } from '../components/AmountLabel';
import { ResetButton } from '../components/ResetButton';

export function AmountContainer({
  bill,
  people,
  tip,
  handleReset,
}: {
  bill: number;
  people: number;
  tip: number;
  handleReset: () => void;
}) {
  function calculateTip() {
    if (!bill || !people || !tip) {
      return { tipAmount: 0, total: 0 };
    }
    const tipPercentage = tip / 100;
    const total = bill * tipPercentage;
    const tipAmount = total / people;
    return { tipAmount, total };
  }

  const { tipAmount, total } = calculateTip();

  return (
    <div className="w-4/5 px-4 py-3 mx-auto my-5 rounded-xl bg-neutral-100 lg:my-0 lg:row-start-1 lg:row-end-4 lg:relative lg:px-8">
      <AmountLabel content="Tip Amount" value={tipAmount.toFixed(2)} />
      <AmountLabel content="Total" value={total.toFixed(2)} />
      <ResetButton onClick={handleReset} />
    </div>
  );
}
