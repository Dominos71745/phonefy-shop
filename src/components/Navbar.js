import Button from "./UI/Button";

const NavBar = () => {
  return (
    <div className="flex justify-evenly items-center bg-black text-white h-16">
      <h1>Phonefy</h1>
      <input className="h-8 " type="text" placeholder="Search Phonefy" />
      <Button>Login</Button>
      <Button>Cart</Button>
    </div>
  );
};

export default NavBar;
