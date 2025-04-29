import React from "react";
import BookForm, { BookFormData } from "./BookForm";

interface AddBookFormProps {
  onAddBook: (data: BookFormData) => void;
}

const AddBookForm: React.FC<AddBookFormProps> = ({ onAddBook }) => {
  return <BookForm onSubmit={onAddBook} />;
};

export default AddBookForm;