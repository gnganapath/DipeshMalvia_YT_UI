import React, { useReducer } from "react";

const initialState = {
  username: "", // text
  bio: "", // textarea
  gender: "male", // radio
  role: "user", // select
  agree: false, // checkbox
};

function formReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    default:
      return state;
  }
}

export default function MyForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    dispatch({
      type: "UPDATE_FIELD",
      field: name,
      value: type === "checkbox" ? checked : value, // Logic for checkboxes
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", state); // Access all values from state
  };

  return (
    <form onSubmit={handleSubmit}>
      <br />
      {/* Text Input */}
      User Name (input type text): <input
        name="username"
        value={state.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <br />
      {/* Textarea */}
        Profile (input type textarea): <textarea
        name="bio"
        value={state.bio}
        onChange={handleChange}
        placeholder="Bio"
      />
      <br />
      {/* Radio Buttons */}
      Gender (Radio group);
      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={state.gender === "male"}
          onChange={handleChange}
        />{" "}
        Male
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={state.gender === "female"}
          onChange={handleChange}
        />{" "}
        Female
      </label>
      <br />
      {/* Select Option */}
      Gender: (select option)
      <select name="role" value={state.role} onChange={handleChange}>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <br />
      {/* Checkbox */}
      <label>
         I (Checkbox)
        <input
          type="checkbox"
          name="agree"
          checked={state.agree}
          onChange={handleChange}
        />{" "}
        Agree to terms
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}
