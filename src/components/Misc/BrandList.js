const BrandList = ({ selectedBrand, onSelectBrand }) => {
  const brands = ["Apple", "Samsung", "Oppo"];

  return (
    <div className="flex flex-row justify-evenly items-center gap-3 text-2xl mt-5 mb-5 font-roboto">
      {brands.map((brand) => (
        <span
          key={brand}
          className={
            selectedBrand === brand
              ? "text-blue-500 cursor-pointer"
              : "cursor-pointer"
          }
          onClick={() => onSelectBrand(brand)}
        >
          {brand}
        </span>
      ))}
    </div>
  );
};

export default BrandList;
