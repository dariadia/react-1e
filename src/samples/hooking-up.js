import { useState, useEffect } from "react";

function Form(username) {
    const [name, setName] = useState(username)

    if (name !== '') {
      useEffect(function persistForm() {
        localStorage.setItem('formData', name)
      });
    }
    useEffect(function updateTitle() {
      document.title = name
    })
}
