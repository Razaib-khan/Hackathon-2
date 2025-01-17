import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from "next/link"

const images = [
  {url:'/Freshlime.png', id:1, fname:'Fresh Lime' },
  {url:'/shopcard2.png', id:2, fname:'Chocolate Muffin'},
  {url:'/shopcard3.png', id:3, fname:'Burger'},
  {url:'/shopcard4.png', id:4, fname:'Country Burger'},
  {url:'/shopcard5.png', id:5, fname:'Drink' }
]

export default function Shopcards() {
  return (
    <div className="relative lg:-mt-[1190px] lg:ml-24">
    <section>
      <Carousel className="w-full max-w-2xl">
        <CarouselContent className="-ml-1">
          {images.map((image, index) => (
            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3 w-full h-full">
              <div className="p-1">
                <Card className="w-full h-full">
                  <CardContent className="flex aspect-square items-center justify-center p-1">
                <Link href={`/Shop/${image.id}`}><img src={image.url} alt={`Image ${index + 1}`} className="w-full h-full object-cover rounded-tl-sm rounded-tr-sm" /></Link>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      </section>
      <section>
      <Carousel className="w-full max-w-2xl">
        <CarouselContent className="-ml-1">
          {images.map((image, index) => (
            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3 w-full h-full">
              <div className="p-1">
                <Card className="w-full h-full">
                  <CardContent className="flex aspect-square items-center justify-center p-1">
                <Link href={`/Shop/${image.id}`}><img src={image.url} alt={`Image ${index + 1}`} className="w-full h-full object-cover rounded-tl-sm rounded-tr-sm" /></Link>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      </section>
      <section>
      <Carousel className="w-full max-w-2xl">
        <CarouselContent className="-ml-1">
          {images.map((image, index) => (
            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3 w-full h-full">
              <div className="p-1">
                <Card className="w-full h-full">
                  <CardContent className="flex aspect-square items-center justify-center p-1">
                <Link href={`/Shop/${image.id}`}><img src={image.url} alt={`Image ${index + 1}`} className="w-full h-full object-cover rounded-tl-sm rounded-tr-sm" /></Link>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      </section>
      <section>
      <Carousel className="w-full max-w-2xl">
        <CarouselContent className="-ml-1">
          {images.map((image, index) => (
            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3 w-full h-full">
              <div className="p-1">
                <Card className="w-full h-full">
                  <CardContent className="flex aspect-square items-center justify-center p-1">
                <Link href={`/Shop/${image.id}`}><img src={image.url} alt={`Image ${index + 1}`} className="w-full h-full object-cover rounded-tl-sm rounded-tr-sm" /></Link>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      </section>
      <section>
      <Carousel className="w-full max-w-2xl">
        <CarouselContent className="-ml-1">
          {images.map((image, index) => (
            <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3 w-full h-full">
              <div className="p-1">
                <Card className="w-full h-full">
                  <CardContent className="flex aspect-square items-center justify-center p-1">
                <Link href={`/Shop/${image.id}`}><img src={image.url} alt={`Image ${index + 1}`} className="w-full h-full object-cover rounded-tl-sm rounded-tr-sm" /></Link>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      </section>
    </div>
  )
}