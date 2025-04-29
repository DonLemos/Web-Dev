import React from "react";

interface BookCardProps {
  title: string;
  author: string;
  coverImageUrl?: string;
  status: string;
  rating?: number;
  notes?: string;
  onDelete?: () => void;
  onEdit?: () => void;
}

const BookCard: React.FC<BookCardProps> = ({
  title,
  author,
  coverImageUrl,
  status,
  rating,
  notes,
  onDelete,
  onEdit,
}) => {
  return (
    <div className="rounded-xl shadow-md border p-4 w-full max-w-md mx-auto">
      {coverImageUrl && (
        <img
          src={coverImageUrl}
          alt={`Cover for ${title}`}
          className="w-full h-48 object-cover rounded"
        />
      )}
      <div className="mt-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-600">by {author}</p>
        <p className="text-sm text-gray-500 mt-1">Status: {status}</p>
        {rating !== undefined && <p className="text-sm">Rating: {rating}/5</p>}
        {notes && <p className="text-sm italic">{notes}</p>}
      </div>
      <div className="flex justify-end mt-2 space-x-2">
        {onEdit && (
          <button onClick={onEdit} className="text-blue-600 hover:underline">
            Edit
          </button>
        )}
        {onDelete && (
          <button onClick={onDelete} className="text-red-600 hover:underline">
            Delete
          </button>
        )}
      </div>
    </div>
  );
};

export default BookCard;