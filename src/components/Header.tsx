import pageLogo from '../assets/logo.svg';

export function Logo() {
  return (
    <header>
      <img src={pageLogo} alt="page-logo" className="mx-auto my-8 lg:my-14" />
    </header>
  );
}
