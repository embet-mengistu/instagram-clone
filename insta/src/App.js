import { useEffect, useState } from "react";
import React from "react";
import Col from "react-bootstrap/Col";
import "./App.css";
import Post from "./Components/Posts/Post";
import Header from "./Components/header/Header";
import { db, auth } from "./firebase";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import ImageUpload from "./imageUpload/ImageUpload";

function App() {
  const [posts, setPosts] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(null);

  // handles the signUp modals
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // handles the sign in modals
  const [openSignIn, setOpenSignIn] = useState(false);
  const handleSignInClose = () => setOpenSignIn(false);
  const handleSignInShow = () => setOpenSignIn(true);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // suer logged in
        console.log(authUser);
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, [user, username]);

  useEffect(() => {
    // fetching the data from the database..
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            // Corrected the object structure
            id: doc.id,
            post: doc.data(), // The data itself
          }))
        );
      });
  }, []);

  const signUp = (e) => {
    e.preventDefault();

    // Create account for users
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        // Update the user's profile with the provided username
        return authUser.user
          .updateProfile({ displayName: username })
          .then(() => {
            // Sign-up and profile update successful
            setUser(authUser.user); // Update user state
            setUsername("");
            setEmail("");
            setPassword("");
            handleClose(); // Close the modal
          })
          .catch((updateProfileError) => {
            console.error("Error updating profile:", updateProfileError);
            alert(
              "An error occurred while updating the profile. Please try again."
            );
          });
      })
      .catch((error) => {
        console.error("Error signing up:", error);
        alert("An error occurred while signing up. Please try again.");
      });
  };

  const handleLogOut = () => {
    auth
      .signOut()
      .then(() => {
        // Sign-out successful.
        setUsername("");
        setPassword("");
        setEmail("");
        setUser(null); // Update the user state to reflect the user being logged out
      })
      .catch((error) => {
        // An error happened.
        console.error("Error signing out:", error);
      });
  };
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password) // Use the correct state variables here
      .then(() => {
        // Sign-in successful.
        setEmail("");
        setPassword("");
        setOpenSignIn(false); // Close the sign-in modal
      })
      .catch((error) => {
        console.error("Error signing in:", error);
        alert("An error occurred while signing in. Please try again.");
      });
  };

  return (
    <div className="App">
      <Header
        user={user}
        handleLogOut={handleLogOut}
        handleSignInShow={handleSignInShow}
        handleShow={handleShow}
      />

      <Modal show={show} onHide={handleClose} className="modal" backdrop="true">
        <div className="signUp_container">
          <Modal.Header>
            <Modal.Title>
              <img
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                className="app_headerImages"
                style={{ display: "block", margin: "0 auto" }}
              />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form className="app_signup">
              <br />
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                {/* <Form.Label>Username</Form.Label> */}
                <Form.Control
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  autoFocus
                  style={{ width: "calc(99% - 5px)", marginRight: "5px" }}
                />
              </Form.Group>

              <br />
              <Form.Group
                className="mb-3 "
                controlId="exampleForm.ControlInput1"
              >
                {/* <Form.Label>Email Address</Form.Label> */}
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  autoFocus
                  style={{ width: "calc(99% - 5px)", marginRight: "5px" }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <br />
              <Form.Group
                className="mb-3 lg-6"
                controlId="exampleForm.ControlTextarea1"
              >
                {/* <Form.Label>Password</Form.Label> */}
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  autoFocus
                  style={{ width: "calc(99% - 5px)", marginRight: "5px" }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <br />
            </Form>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={handleClose}
                style={{ width: "calc(50% - 5px)", marginRight: "5px" }}
              >
                Close
              </Button>

              <Button
                type="submit"
                variant="primary"
                onClick={signUp}
                style={{ width: "calc(50% - 5px)", marginRight: "5px" }}
              >
                Sign Up
              </Button>
            </Modal.Footer>
          </Modal.Body>
        </div>
      </Modal>
      {/* SIGN IN */}
      <Modal
        show={openSignIn}
        onHide={() => setOpenSignIn(false)}
        className="modal"
        backdrop="true"
      >
        <div className="signUp_container">
          <Modal.Header>
            <Modal.Title>
              <img
                src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                className="app_headerImages"
                style={{ display: "block", margin: "0 auto" }}
              />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form className="app_signup">
              <br />
              <Form.Group
                className="mb-3 "
                controlId="exampleForm.ControlInput1"
              >
                {/* <Form.Label>Email Address</Form.Label> */}
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  autoFocus
                  style={{ width: "calc(99% - 5px)", marginRight: "5px" }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <br />
              <Form.Group
                className="mb-3 lg-6"
                controlId="exampleForm.ControlTextarea1"
              >
                {/* <Form.Label>Password</Form.Label> */}
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  autoFocus
                  style={{ width: "calc(99% - 5px)", marginRight: "5px" }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <br />
            </Form>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={handleSignInClose}
                style={{ width: "calc(50% - 5px)", marginRight: "5px" }}
              >
                Close
              </Button>

              <Button
                type="submit"
                variant="primary"
                onClick={signIn}
                style={{ width: "calc(50% - 5px)", marginRight: "5px" }}
              >
                Sign In
              </Button>
            </Modal.Footer>
          </Modal.Body>
        </div>
      </Modal>
      {posts.map(({ post, id }) => (
        <Post
          // we add key,so that it can just render the new one(bc it ardy knows which existed and which didnt)
          key={id}
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
          postId={id}
          user={user}
        />
      ))}

      {/* only can upload image if the login or sihn in */}
      {user?.displayName ? (
        <ImageUpload username={user.displayName} />
      ) : (
        <h3></h3>
      )}
    </div>
  );
}

export default App;
