// Add cars data to LocalStorage
const addToLocalStorage = (data) => {
  let cars = JSON.parse(localStorage.getItem("cars"));
  if (cars) {
    cars.push(data);
    localStorage.setItem("cars", JSON.stringify(cars));
  } else {
    localStorage.setItem("cars", JSON.stringify([data]));
  }
};

// Remove cars data from LocalStorage
const removeFromLocalStorage = (data) => {
  let cars = JSON.parse(localStorage.getItem("cars"));
  if (cars) {
    cars = cars.filter((car) => car !== data);
    localStorage.setItem("cars", JSON.stringify(cars));
  }
};

// Get cars data from LocalStorage
const getFromLocalStorage = () => {
  let cars = JSON.parse(localStorage.getItem("cars"));
  if (cars) {
    return cars;
  } else {
    return [];
  }
};

// Update car data from LocalStorage
const updateFromLocalStorage = (data) => {
  let cars = getFromLocalStorage();
  let car = cars.find((i) => i.id === data.id);
  addToLocalStorage({ ...car, ...data });
};

// Clear LocalStorage
const clearLocalStorage = () => {
  localStorage.removeItem("cars");
};

export {
  addToLocalStorage,
  removeFromLocalStorage,
  getFromLocalStorage,
  clearLocalStorage,
  updateFromLocalStorage,
};
