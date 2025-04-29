import React from "react";
import AddBookForm from "../components/books/AddBookForm";
import { trpc } from "../utils/trpc";

const AddBookPage = () => {
  const utils = trpc.useContext();
  const addBookMutation = trpc.books.add.useMutation({
    onSuccess: () => {
      utils.books.getAll.invalidate();
    },
  });

  const handleAddBook = (data: BookFormData) => {
    addBookMutation.mutate(data);
  };

  return (
    <div>
      <h1>Add a New Book</h1>
      <AddBookForm onAddBook={handleAddBook} />
    </div>
  );
};

export default AddBookPage;
