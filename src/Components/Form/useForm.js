import { useState } from "react";

function useForm(initState = {}) {
  const [form, setForm] = useState(initState);

  function handleForm({ target: { value, name } }) {
    setForm({
      ...form,
      [name]: value,
    });
  }
  return [form, handleForm];
}

export { useForm };
