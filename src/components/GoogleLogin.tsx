"use client"

import { useState, useEffect } from "react"
import googleOneTap from 'google-one-tap';

const options = {
  client_id: '910193991072-542kbb03f4b1o8th2k2bui06u8eh9jng.apps.googleusercontent.com', // required
  auto_select: false, // optional
  cancel_on_tap_outside: false, // optional
  context: 'signin', // optional
};

export default function App() {
  const [loginData, setLoginData] = useState()
  useEffect(() => {
    alert("yes")
    googleOneTap(options, (response) => {
      // Send response to server
      console.log(response);
    });
  }, [])
}