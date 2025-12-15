import { navLinks } from "../constants";

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="Apple logo" className="px-5"/>
        <ul>
          {navLinks.map(({ label }) => (
            <li key={label}>
              <a href="label">{label}</a>
            </li>
          ))}
        </ul>
        <div className="flex-center gap-3 px-5">
          <button>
            <img src="/search.svg" alt="Search"></img>
          </button>
          <button>
            <img src="/cart.svg" alt="Cart"></img>
          </button>
        </div>
      </nav>
      <div></div>
    </header>
  );
};

export default Navbar;
