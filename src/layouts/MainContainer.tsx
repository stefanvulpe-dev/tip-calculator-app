import { Input } from '../components/Input';
import { AmountContainer } from './AmountContainer';
import { TipContainer } from './TipContainer';
import { useState } from 'react';

export function MainContainer() {
  const [bill, setBill] = useState(0.0);
  const [people, setPeople] = useState(0.0);
  const [tip, setTip] = useState(0.0);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const parent = e.target.parentElement!;
    const errorParagraph =
      parent.querySelector<HTMLParagraphElement>('#error-para')!;
    if (!(Number(e.target.value) > 0)) {
      errorParagraph.classList.add('visible');
      e.target.classList.add('invalid');
    } else {
      errorParagraph.classList.remove('visible');
      e.target.classList.remove('invalid');
    }
  }

  return (
    <main className="bg-white py-4 mx-auto rounded-2xl w-full max-w-md lg:max-w-4xl lg:py-8 lg:grid lg:grid-cols-2 lg:grid-rows-rows-balanced">
      <Input
        id="bill"
        label="Bill"
        backgroundImage="bg-icon-dollar"
        value={bill}
        onChange={(e) => {
          handleInputChange(e);
          setBill(Number(e.target.value));
        }}
      />
      <TipContainer onTipChange={setTip} />
      <Input
        id="people"
        label="Number of People"
        backgroundImage="bg-icon-person"
        value={people}
        onChange={(e) => {
          handleInputChange(e);
          setPeople(Number(e.target.value));
        }}
      />
      <AmountContainer
        bill={bill}
        tip={tip}
        people={people}
        handleReset={() => {
          setBill(0);
          setPeople(0);
          setTip(0);
          const customTipInput =
            document.querySelector<HTMLInputElement>('#custom')!;
          customTipInput.value = '';
          customTipInput.classList.remove('invalid');
          const errorParagraphs =
            document.querySelectorAll<HTMLParagraphElement>('#error-para');
          errorParagraphs.forEach((para) => {
            para.classList.remove('visible');
            const parent = para.parentElement?.parentElement!;
            const input = parent.querySelector<HTMLInputElement>('input')!;
            input.classList.remove('invalid');
          });
          const checkedInput = document.querySelector<HTMLInputElement>(
            'input[type="radio"]:checked'
          );
          if (checkedInput) {
            checkedInput.checked = false;
          }
        }}
      />
    </main>
  );
}
