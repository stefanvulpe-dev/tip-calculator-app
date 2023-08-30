export function AmountLabel({
  content,
  value,
}: {
  content: string;
  value: string;
}) {
  return (
    <div className="my-5 flex gap-2 justify-between items-center first:mb-8 lg:my-8">
      <p>
        <span className="block text-neutral-500 text-sm">{content}</span>
        <span className="block text-neutral-300 text-xs">/ person</span>
      </p>
      <p className="text-3xl text-primary font-bold lg:text-4xl">${value}</p>
    </div>
  );
}
