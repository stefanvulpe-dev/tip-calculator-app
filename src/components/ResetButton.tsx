export function ResetButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full py-2 my-2 bg-primary rounded-md text-neutral-100 font-bold uppercase transition-all hover:bg-neutral-400 focus:outline-primary lg:w-auto lg:absolute lg:bottom-4 lg:left-8 lg:right-8"
    >
      Reset
    </button>
  );
}
