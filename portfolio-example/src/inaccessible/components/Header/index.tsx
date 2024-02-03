import Arrow from "./Arrow";
import NavLinks from "./NavLinks";
import Avatar from "./Avatar";

export function Header() {
  return (
    <header className="text-center mb-10 h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex justify-center items-center flex-col rounded-md p-4">
      <Avatar />
      <h1 className="font-bold">Example</h1>
      <p className="text-lg font-semibold text-neutral-300">IAAP member</p>
      <p className="text-lg">📍 Palo alto</p>
      <NavLinks />
      <Arrow />
    </header>
  );
}
