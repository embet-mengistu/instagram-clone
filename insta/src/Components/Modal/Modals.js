// import React from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Modal from "react-bootstrap/Modal";
// function Modals() {
//   return (
//     <div>
//       {" "}
//       <Modal show={show} onHide={handleClose} className="modal" backdrop="true">
//         <div className="signUp_container">
//           <Modal.Header>
//             <Modal.Title>
//               <img
//                 src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
//                 className="app_headerImages"
//                 style={{ display: "block", margin: "0 auto" }}
//               />
//             </Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <Form className="app_signup">
//               <br />
//               <Form.Group
//                 className="mb-3"
//                 controlId="exampleForm.ControlInput1"
//               >
//                 {/* <Form.Label>Username</Form.Label> */}
//                 <Form.Control
//                   type="text"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   placeholder="Enter your username"
//                   autoFocus
//                   style={{ width: "calc(99% - 5px)", marginRight: "5px" }}
//                 />
//               </Form.Group>

//               <br />
//               <Form.Group
//                 className="mb-3 "
//                 controlId="exampleForm.ControlInput1"
//               >
//                 {/* <Form.Label>Email Address</Form.Label> */}
//                 <Form.Control
//                   type="email"
//                   placeholder="Enter your email"
//                   autoFocus
//                   style={{ width: "calc(99% - 5px)", marginRight: "5px" }}
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </Form.Group>

//               <br />
//               <Form.Group
//                 className="mb-3 lg-6"
//                 controlId="exampleForm.ControlTextarea1"
//               >
//                 {/* <Form.Label>Password</Form.Label> */}
//                 <Form.Control
//                   type="password"
//                   placeholder="Enter your password"
//                   autoFocus
//                   style={{ width: "calc(99% - 5px)", marginRight: "5px" }}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </Form.Group>
//               <br />
//             </Form>
//             <Modal.Footer>
//               <Button
//                 variant="secondary"
//                 onClick={handleClose}
//                 style={{ width: "calc(50% - 5px)", marginRight: "5px" }}
//               >
//                 Close
//               </Button>

//               <Button
//                 type="submit"
//                 variant="primary"
//                 onClick={signUp}
//                 style={{ width: "calc(50% - 5px)", marginRight: "5px" }}
//               >
//                 Sign Up
//               </Button>
//             </Modal.Footer>
//           </Modal.Body>
//         </div>
//       </Modal>
//       {/* SIGN IN */}
//       <Modal
//         show={openSignIn}
//         onHide={() => setOpenSignIn(false)}
//         className="modal"
//         backdrop="true"
//       >
//         <div className="signUp_container">
//           <Modal.Header>
//             <Modal.Title>
//               <img
//                 src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
//                 className="app_headerImages"
//                 style={{ display: "block", margin: "0 auto" }}
//               />
//             </Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <Form className="app_signup">
//               <br />
//               <Form.Group
//                 className="mb-3 "
//                 controlId="exampleForm.ControlInput1"
//               >
//                 {/* <Form.Label>Email Address</Form.Label> */}
//                 <Form.Control
//                   type="email"
//                   placeholder="Enter your email"
//                   autoFocus
//                   style={{ width: "calc(99% - 5px)", marginRight: "5px" }}
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </Form.Group>

//               <br />
//               <Form.Group
//                 className="mb-3 lg-6"
//                 controlId="exampleForm.ControlTextarea1"
//               >
//                 {/* <Form.Label>Password</Form.Label> */}
//                 <Form.Control
//                   type="password"
//                   placeholder="Enter your password"
//                   autoFocus
//                   style={{ width: "calc(99% - 5px)", marginRight: "5px" }}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </Form.Group>
//               <br />
//             </Form>
//             <Modal.Footer>
//               <Button
//                 variant="secondary"
//                 onClick={handleSignInClose}
//                 style={{ width: "calc(50% - 5px)", marginRight: "5px" }}
//               >
//                 Close
//               </Button>

//               <Button
//                 type="submit"
//                 variant="primary"
//                 onClick={signIn}
//                 style={{ width: "calc(50% - 5px)", marginRight: "5px" }}
//               >
//                 Sign In
//               </Button>
//             </Modal.Footer>
//           </Modal.Body>
//         </div>
//       </Modal>
//     </div>
//   );
// }

// export default Modals;
