import Button from "./UI/Button";

const NavBar = () => {
  return (
    <div className="flex justify-evenly items-center bg-black text-white h-16">
      <h1 className="text-3xl">Phonefy</h1>
      <input
        className="h-8 w-96 rounded-3xl placeholder:p-4"
        type="text"
        placeholder="Search Phonefy"
      />
      <Button>Login</Button>
      <Button>Cart</Button>
    </div>
  );
};

export default NavBar;
