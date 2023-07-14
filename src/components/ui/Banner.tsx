import { Carousel, Typography, Button } from "@material-tailwind/react";
import img1 from '../../assets/images/1.jpg'
import img2 from '../../assets/images/2.webp'
import img3 from '../../assets/images/5.jpg'
export default function Banner() {
  return (
    <Carousel className="max-w-6xl  mx-auto rounded-lg pt-0">
      <div className="relative h-full w-full">
        <img
          src={img1}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-2xl md:text-4xl lg:text-5xl"
            >
             A good bookshop is just a genteel Black Hole that knows how to read.
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-90"
            >―Terry Pratchett, Guards! Guards!
             
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white">
                Get Started
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={img2}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Books were safer than other people anyway.
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              ―Neil Gaiman, The Ocean at the End of the Lane
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
             Get Started
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={img3}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The more that you read, the more things you will know.
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-50"
            >
              ―Dr. Seuss, I Can Read With My Eyes Shut!
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="white">
               Get Started
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}