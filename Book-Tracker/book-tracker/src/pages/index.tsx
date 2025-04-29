import React, { useEffect, useState } from "react";
import { trpc } from "../utils/trpc";
import BookCard from "../components/books/BookCard";

const IndexPage = () => {
  const { data: books, isLoading } = trpc.books.getAll.useQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="space-y-4">
      {books?.map((book) => (
        <BookCard
          key={book.id}
          title={book.title}
          author={book.author}
          status={book.status}
          rating={book.rating}
          notes={book.notes}
          coverImageUrl={book.coverImageUrl}
        />
      ))}
    </div>
  );
};

export default IndexPage;
