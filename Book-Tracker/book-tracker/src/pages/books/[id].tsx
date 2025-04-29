import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";
import BookCard from "../../components/books/BookCard";

const BookDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  
  const { data: book, isLoading } = trpc.books.getOne.useQuery(
    { id: id as string },
    { enabled: !!id }
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Book Details</h1>
      {book && (
        <BookCard
          title={book.title}
          author={book.author}
          status={book.status}
          rating={book.rating}
          notes={book.notes}
          coverImageUrl={book.coverImageUrl}
        />
      )}
    </div>
  );
};

export default BookDetailPage;
