import BookCar from "./components/CarBooking/BookCar";
import SlideShow from "./components/SummerPromotion/SummerPromotion";
import PopularCars from "./components/PopularCars/PopularCars";
import Subscribe from "./components/Subscribe/Subscribe";
import RentLease from "./components/RentLease/RentLease";
import Locations from "./components/Locations/Locations";
import Faq from "./components/Faq/Faq";

export default function Home() {
  return (
    <main >
      <BookCar/>
      <SlideShow/>
      <PopularCars/>
      <Subscribe />
      <RentLease/>
      <Locations/>
      <Faq/>
    </main>
  );
}
