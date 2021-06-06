import React from "react";
import { Field, reduxForm, formValueSelector } from "redux-form";
import pizzaImg from "./pizza.svg";
import soupImg from "./soup.svg";
import sandwichImg from "./sandwich.svg";
import { connect } from "react-redux";
import submit from '../../components/submit/submit'




let inputForm = (props) => {
  let {option, pristine, submitting, handleSubmit} = props;


  const renderField = ({
    input,
    name,
    type,
    placeholder,
    required,
    step,
    onInput,
    min,
    max,
    id,
    parse,
    defaultValue,
    meta: { submit, touched, error }
  }) => (
        <React.Fragment>
        <input {...input} type={type} placeholder={placeholder} name={name} step={step} parse={parse} required={required} defaultValue = {defaultValue} onInput={onInput} min={min} max={max} id={id}/>
        {touched && error && <span className="error">{error}</span>}
        </React.Fragment>
  )
  
  return (
    <form className="app__form" onSubmit={handleSubmit(submit)}>
      <div className="app__form__scroll">
        <label className="app__form__dish">
          <h3>Dish name</h3>
          <Field
            name="name"
            component={renderField}
            type="text"
            placeholder="Enter dish name"
            required={true}
            
          />
        </label>
        <label className="app__form__time">
          <h3>Preparation time</h3>
          <Field
            name="preparation_time"
            type="time"
            placeholder="00:00:00"
            step="1"
            required={true}
            component={renderField}
          />
        </label>
        <div className="app__form__type">
          <h3>Type of dish</h3>
          <div className="app__form__type__options">
            <label htmlFor="pizza">
              <img src={pizzaImg} alt="pizza" />
              <h2>Pizza</h2>
              <Field
                name="type"
                id="pizza"
                type="radio"
                value="pizza"
                required={true}
                component={renderField}
              />
            </label>
            <label htmlFor="soup">
              <img src={soupImg} alt="pizza" />

              <h2>Soup</h2>
              <Field
                name="type"
                id="soup"
                type="radio"
                value="soup"
                required={true}
                component={renderField}
              />
            </label>
            <label htmlFor="sandwich">
              <img src={sandwichImg} alt="sandwich" />
              <h2>Sandwich</h2>
              <Field
                name="type"
                id="sandwich"
                type="radio"
                value="sandwich"
                required={true}
                component={renderField}
              />
            </label>
          </div>

          {option === "pizza" && (
            <React.Fragment>
              <label>
                <h3>Number of slices</h3>
                <Field name="no_of_slices"  component={renderField} parse={value => parseInt(value)} type="number" min="1" max="36" step="1" placeholder="Enter number of pizza slices"/>
              </label>
              <label>
                <h3>Diameter length in centimeters</h3>
                <Field name="diameter"  component={renderField} parse={value => parseFloat(value)}   type="number" step="0.01" min="0.00" placeholder="Enter diameter length"/>
              </label>
            </React.Fragment>
          )}
          {option === "sandwich" && (
            <React.Fragment>
              <label>
                <h3>Slices of bread</h3>
                <Field name="slices_of_bread"  component={renderField} parse={value => parseInt(value)}  type="number" min="1" step="1" placeholder="Enter number of bread slices"/>
              </label>          
            </React.Fragment>
          )}
          {option === "soup" && (
            <React.Fragment>
              <label>
                <h3>Spiciness</h3>
                <Field name="spiciness_scale"  component={renderField} parse={value => parseInt(value)} id="slider" type="range" value="6" min="1" max="10" step="1" onInput={(e) => e.target.nextSibling.textContent = e.target.value}/>
                <h4>6</h4>
              </label>          
            </React.Fragment>
          )}
        </div>
        <button onSubmit={handleSubmit} type="submit" disabled={pristine || submitting}>Submit</button>
      </div>
      <div className="confirmation"><h2>Dish was successfully added</h2></div>
    </form>
  );
};



  

inputForm = reduxForm({
  form: "dishes", // a unique identifier for this form,
  submit
})(inputForm);



const selector = formValueSelector("dishes"); // <-- same as form name
inputForm = connect((state) => {


  const option = selector(state, "type");

  return {
    option
    
  };
})(inputForm);

export default inputForm;
