import { Card, Input, Button } from '@material-tailwind/react';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { useLocation } from 'react-router-dom';
export default function EditBook() {
  const submit = (e: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    e.preventDefault();
    const editbook = {
      title,
      author,
      image,
      genre,
      price,
      description,
      publication_date,
    };
    console.log(editbook);
    toast.success('SuccessFully edited');
  };

  const location = useLocation();
  console.log('location', location.state?.data?.publicationDate);

  const [title, setTitle] = useState(location.state?.data?.title);
  const [author, setAuthor] = useState(location.state?.data?.author);
  const [image, setImage] = useState(location.state?.data?.image);
  const [genre, setGenre] = useState(location.state?.data?.genre);
  const [price, setPrice] = useState(location.state?.data?.price);
  const [description, setDescription] = useState(
    location.state?.data?.description
  );
  const [publication_date, setPublicationDate] = useState(
    location.state?.data?.publication_date
  );

  return (
    <Card color="transparent" shadow={false}>
      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        onSubmit={submit}
      >
        <div className="mb-4 flex flex-col gap-6">
          <Input
            size="lg"
            label="Title"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            size="lg"
            label="Author"
            name="author"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <Input
            size="lg"
            label="Image Url"
            name="image"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <Input
            size="lg"
            label="Genre"
            name="genre"
            id="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
          <Input
            size="lg"
            label="Publication Date"
            name="publicationDate"
            id="publicationDate"
            value={publication_date}
            onChange={(e) => setPublicationDate(e.target.value)}
          />
          <Input
            size="lg"
            label="Price"
            name="price"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <Input
            size="lg"
            label="Description"
            name="description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <Button className="mt-6" fullWidth type="submit">
          Edit Book
        </Button>
      </form>
    </Card>
  );
}
