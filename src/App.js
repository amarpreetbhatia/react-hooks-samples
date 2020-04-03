import React from "react";
import "./styles.css";
import Counter from "./Counter";
import NoteApp from "./NoteApp";
// import Dropdown from "react-dropdown";
// import ResizeImage from "react-resize-image";
// import AspectRatio from "react-aspect-ratio";

// const NoteApp = () => {
//   const changeSelection = e => {
//     alert(`changes ${e.value}`);
//   };

//   const options = ["one", "two", "three"];
//   const defaultOption = "two";
//   return (
//     <div>
//       <form>
//         <input type="text" value={"empty"} />
//         <Dropdown
//           options={options}
//           onChange={changeSelection}
//           value={defaultOption}
//           placeholder="Select an option"
//         />
//       </form>
//       {/* <AspectRatio ratio="3/4" style={{ width: "108px", height: "144px" }}>
//         <img src=" https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/samsung/s20/device/s20/samsung-s20-front-grey-270x530.png" />
//       </AspectRatio> */}
//       {/* <ResizeImage
//         resizeActive={true}
//         options={{ width: 108, height: 144 }}
//       /> */}
//     </div>
//   );
// };

export default function App() {
  return (
    <div className="App">
      <Counter counter={10} />
      <NoteApp />
    </div>
  );
}
