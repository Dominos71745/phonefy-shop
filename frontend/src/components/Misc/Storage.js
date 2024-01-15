import Card from "../UI/Card";

const Storage = ({ onSelectStorage, storage }) => {
  const storageChangeHandler = (event) => {
    const selectedStorageValue = event.target.value;
    onSelectStorage(selectedStorageValue);
  };

  return (
    <Card width="150px" height="60px">
      <select id="storage" name="storage" onChange={storageChangeHandler}>
        {storage.map((storage, index) => {
          return (
            <option key={index} value={storage}>
              {storage}
            </option>
          );
        })}
      </select>
    </Card>
  );
};

export default Storage;
