import Banner from "../components/ui/Banner";
import PopularAutor from "../components/ui/PopularAutor";
import ResentlyAdded from "./ResentlyAdded";

export default function Home() {
  return (
    <div>
      <Banner/>
      <div className="mt-20">
       <h1 className="text-center font-semibold text-2xl text-blue-600">
      Recent Book
    </h1>
      <p className="text-center font-normal text-sm mb-10 text-gray-600">
      Recently added book show here
    </p>
        <ResentlyAdded/>
      </div>

      <div className="mt-20">
         <h1 className="text-center font-semibold text-2xl text-blue-600 ">
      Popular Author
    </h1>
     <p className="text-center font-normal text-sm mb-10 text-gray-600">
     A good author write the fiction wow!
    </p>
        <PopularAutor/>
      </div>
    </div>
  )
}
