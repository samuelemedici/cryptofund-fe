const Header = () => {
  return (
    <header className="flex items-center w-full gap-x-4 p-4">
      <div className="primary-linear-gradient w-16 h-16 rounded-[50%]"></div>
      <h1>CRIPTOAMICI</h1>
      <div className="grow"></div>
      <button type="button" className="button-primary">
        JOIN US
      </button>
    </header>
  );
};

export default Header;
