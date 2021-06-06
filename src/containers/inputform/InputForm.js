import React from "react";
import { Field, reduxForm } from "redux-form";
import pizza from "./pizza.svg";
import soup from "./soup.svg";
import sandwich from "./sandwich.svg";

const inputForm = (props) => {
  const { handleSubmit } = props;

  return (
    <form className="app__form" onSubmit={handleSubmit}>
      <div className="app__form__scroll">
      <label className="app__form__dish">
        <h3>Dish name</h3>
        <Field
          name="dishName"
          component="input"
          type="text"
          placeholder="Enter dish name"
        />
      </label>
      <label className="app__form__time">
        <h3>Preparation time</h3>
        <Field
          name="prepTime"
          component="input"
          type="time"
          placeholder="00:00:00"
          step="1"
        />
      </label>
      <div className="app__form__type">
        <h3>Type of dish</h3>
        <div className="app__form__type__options">
          <label htmlFor="pizza">
            <img src={pizza} alt="pizza" />
            <h2>Pizza</h2>
            <Field name="type" id="pizza" component="input" type="radio" />
          </label>
          <label htmlFor="soup">
            <img src={soup} alt="pizza" />

            <h2>Soup</h2>
            <Field name="type" id="soup" component="input" type="radio" />
          </label>
          <label htmlFor="sandwich">
            <img src={sandwich} alt="pizza" />
            <h2>Sandwich</h2>
            <Field name="type" id="sandwich" component="input" type="radio" />
          </label>
        </div>
      </div>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "simple", // a unique identifier for this form
})(inputForm);
