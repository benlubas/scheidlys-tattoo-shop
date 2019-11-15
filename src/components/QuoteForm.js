import React, { Component } from 'react';
import { Formik } from 'formik';
import { TextField, Input, Button } from '@material-ui/core';
import './QuoteForm.css';

const QuoteForm = () => {
  return (
    <Formik
      initialValues={{
        title: '',
        context: '',
        quote: '',
        date: ''
      }}
      onsubmit={data => {
        console.log(data);
      }}
    >
      {(values, handleBlur, handleChange, handleSubmit) => (
        <form>
          <div className="input-group">
            <TextField
              label="Title"
              autoComplete="off"
              id="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
              name="title"
            />
          </div>
          <div className="input-group">
            <TextField
              name="context"
              label="Context"
              id="context"
              variant="outlined"
              multiline={true}
              fullWidth={true}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.context}
            />
          </div>
          <div className="input-group">
            <TextField
              label="Quote"
              autoComplete="off"
              fullWidth={true}
              id="quote"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.quote}
              name="quote"
            />
          </div>
          <div className="input-group">
            <TextField
              label="Date"
              id="date"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.date}
              name="date"
              helperText="Whatever format you want"
            />
          </div>
          <Button type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default QuoteForm;
