// import React, { useState } from "react";
// import SignIn from "../signIn";
// import SignUp from "../signUp";

// function Modal({ children, isOpen, onClose }) {
//   if (!isOpen) return null; // Don't render if not open
//   const [hasId, setHasId] = useState(true);

//   const toggleHasId = () => {
//     setHasId(!hasId);
//     console.log(hasId);
//   };

//   return (
//     <div className="fixed top-0  left-0 w-full h-full bg-[#ffffffcc] dark:bg-[#1b1b1bcc] z-10">
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded shadow">
//         <button
//           type="button"
//           onClick={onClose}
//           className=" fixed top-0 right-5 text-[30px] hover:text-red-500"
//         >
//           x
//         </button>
//         {/* <div className="">{children}</div> */}
//         {hasId ? (
//           <SignIn hasId={hasId} toggleHasId={toggleHasId} />
//         ) : (
//           <SignUp hasId={hasId} toggleHasId={toggleHasId} />
//         )}
//       </div>
//     </div>
//   );
// }

// export default Modal;
