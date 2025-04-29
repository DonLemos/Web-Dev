import React, { useState } from "react";

interface BookFormProps {
  onSubmit: (data: BookFormData) => void;
  initialData?: BookFormData;
}

export interface BookFormData {
  title: string;
  author: string;
  coverImageUrl?: string;
  status: string;
  rating?: number;
  notes?: string;
}

const BookForm: React.FC<BookFormProps> = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState<BookFormData>(
    initialData || {
      title: "",
      author: "",
      coverImageUrl: "",
      status: "Not Started",
      rating: undefined,
      notes: "",
    }
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md mx-auto">
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Book Title"
        className="w-full border px-4 py-2 rounded"
        required
      />
      <input
        name="author"
        value={formData.author}
        onChange={handleChange}
        placeholder="Author"
        className="w-full border px-4 py-2 rounded"
        required
      />
      <input
        name="coverImageUrl"
        value={formData.coverImageUrl || ""}
        onChange={handleChange}
        placeholder="Cover Image URL"
        className="w-full border px-4 py-2 rounded"
      />
      <input
        name="status"
        value={formData.status}
        onChange={handleChange}
        placeholder="Status (e.g. Reading, Finished)"
        className="w-full border px-4 py-2 rounded"
      />
      <input
        name="rating"
        type="number"
        min={1}
        max={5}
        value={formData.rating ?? ""}
        onChange={handleChange}
        placeholder="Rating (1-5)"
        className="w-full border px-4 py-2 rounded"
      />
      <textarea
        name="notes"
        value={formData.notes}
        onChange={handleChange}
        placeholder="Notes"
        className="w-full border px-4 py-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default BookForm;