"use client"

import { useState, useEffect } from "react"
import googleOneTap from 'google-one-tap';

const options = {
  client_id: '910193991072-v8ulag8596cnolc1523pmgitfelmp75j.apps.googleusercontent.com', // required
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