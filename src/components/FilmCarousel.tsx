import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { getFilmList } from "@/utils/get-film-list";

export function FilmCarousel(props: { films: ReturnType<typeof getFilmList> }) {
  const { films } = props;

  return (
    <div className="p-4 text-center">
      <h2 className="text-xl font-bold mb-4">
        Has appeared in {films.length} Film{films.length > 1 ? "s" : ""}:
      </h2>
      <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {films.map((film) => (
            <CarouselItem key={film.id}>
              <Card className="shadow-lg">
                <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                  <h3 className="text-xl font-semibold mb-1">{film.title}</h3>
                  <span className="text-gray-500 mb-4">{film.releaseDate}</span>
                  <p className="text-base">
                    Number of planets without water: {film.numberOfDryPlanets}
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
