import Logo from "../assets/logo-text.png";

export default function Navbar() {
  return (
    <nav className="border-b-4 border-base-200 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div>
            <img src={Logo} alt="DevStack Logo" className="w-44" />
          </div>

          {/* Menu */}
          <ul className="hidden items-center gap-9 md:flex">
            <li>
              <a className="text-primary font-medium" href="#">
                Home
              </a>
            </li>

            <li>
              <a className="text-base-content" href="#">
                Technologies
              </a>
            </li>

            <li>
              <a className="text-base-content" href="#">
                Projects
              </a>
            </li>

            <li>
              <a className="text-base-content" href="#">
                About
              </a>
            </li>

            <li>
              <a className="text-base-content" href="#">
                Contact
              </a>
            </li>
          </ul>

          {/* Buttons */}
          <div className="flex">
            <button className="btn rounded-full btn-ghost">Sign In</button>
            <button className="btn btn-primary rounded-full">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
