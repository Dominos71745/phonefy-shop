import Card from "../UI/Card";

const Storage = ({ onSelectStorage, storage }) => {
  const storageClickHandler = (event) => {
    const selectedStorageIndex = event.target.getAttribute("data-color-index");
    const selectStorage = storage[selectedStorageIndex];
    onSelectStorage(selectStorage);
  };

  return (
    <Card width="150px" height="60px">
      {storage.map((storage, index) => {
        return (
          <select id="storage" name="storage" onChange={storageClickHandler}>
            <option key={index}>{storage}</option>
          </select>
        );
      })}
    </Card>
  );
};

export default Storage;
