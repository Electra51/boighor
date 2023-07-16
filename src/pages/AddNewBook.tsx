import { Card, Input, Button } from '@material-tailwind/react';
import { useState } from 'react';
import { useAppDispatch } from '../redux/hook';
import { addbooks } from '../redux/feature/addBook/addBookSlice';
import toast from 'react-hot-toast';
import { usePostAddBookMutation } from '../redux/api/apiSlice';
import { useNavigate } from 'react-router-dom';
export default function AddNewBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState('');
  const [genre, setGenre] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [publication_date, setPublicationDate] = useState('');
  const [postNewBook, ss] = usePostAddBookMutation();
  console.log(ss)
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const submit = (e: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    e.preventDefault();
    const book = { title, author, image, genre, publication_date, price, description };
    dispatch(addbooks(book));
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    postNewBook(book);
    toast.success('SuccessFully Added');
     navigate('/');
    console.log(book);
  };

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
          Add Book
        </Button>
      </form>
    </Card>
  );
}
