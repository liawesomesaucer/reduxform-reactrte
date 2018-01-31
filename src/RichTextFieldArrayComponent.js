import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form';
import RichTextEditor from 'react-rte';

import RichTextMarkdown from './RichTextMarkdown';

const renderField = ({ input, meta: { touched, error } }) => (
  <div>
    <RichTextMarkdown {...input} />
    {touched && (error && <div className="formValidationErrorText">{error}</div>)}
  </div>
);

class RichTextFieldArrayComponent extends React.Component {

  constructor(props) {
      super(props);
  }

  // The renderField const should go here
  componentWillReceiveProps(nextProps) {
    if (nextProps.submitSucceeded) {
      this.setState({ textEditor: RichTextEditor.createEmptyValue() });
    }
  }

  render() {

    // The renderField const should  be instantiated OUTSIDE the render function for performance reasons.
    // However, it needs to be reloaded upon any change to the DOM, so here it is.
    //

    return (
        <div>
          <Field
            name={'ok'}
            component={RichTextMarkdown}
          />
        </div>
    );
  }
}

RichTextFieldArrayComponent = reduxForm({
  form: 'reactrte'
})(RichTextFieldArrayComponent);

export default RichTextFieldArrayComponent;
