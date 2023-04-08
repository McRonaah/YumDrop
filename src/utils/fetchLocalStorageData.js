export const fetchUser = () => {
    const userInfo =
      localStorage.getItem("user") !== "undefined"
        ? JSON.parse(localStorage.getItem("user"))
        : localStorage.clear();
  
    return userInfo;
  };
  
  export const fetchCart = () => {
    const cartInfo =
      localStorage.getItem("cartItem") !== "undefined"
        ? JSON.parse(localStorage.getItem("cartItem"))
        : localStorage.clear();
  
    return cartInfo ? cartInfo : [];
  };