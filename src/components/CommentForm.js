import React from "react";
import { Form as styleForm, Button } from "react-bootstrap";
import { Formik, Field, Form } from "formik";
import { useSelector } from "react-redux";
const CommentForm = ({ addComment }) => {
  const user = useSelector((state) => state.user);
  return (
    <Formik
      initialValues={{ comment: "" }}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        setSubmitting(true);
        addComment(values.comment);
        resetForm({ values: { comment: "" } });
      }}
    >
      {() => (
        <Form>
          <styleForm.Group>
            <styleForm.Label>{`Comment as ${user.username}`}:</styleForm.Label>
            <Field name="comment">
              {({ field }) => (
                <styleForm.Control
                  as="textarea"
                  rows={4}
                  {...field}
                  placeholder="What are your thoughts?"
                ></styleForm.Control>
              )}
            </Field>
            <styleForm.Text className="text-muted">
              Please follow the community's rule! This application supports{` `}
              <a
                href="https://www.markdownguide.org/basic-syntax/"
                target="_blank"
                rel="noopener noreferrer"
              >
                markdown syntax
              </a>
              , try it out!
            </styleForm.Text>
          </styleForm.Group>
          <Button type="submit" id="create-comment">
            COMMENT
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default CommentForm;
