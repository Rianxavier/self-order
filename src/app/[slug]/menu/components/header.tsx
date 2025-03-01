"use client";

import { Restaurant } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import { notFound, useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

interface RestaurantHeaderProps {
    restaurant: Pick<Restaurant, "name" | "coverImageUrl">;
}

const RestaurantHeader = ({ restaurant }: RestaurantHeaderProps) => {
    const { slug } = useParams<{ slug: string }>();
    const router = useRouter();
    const handleBackClick = () => router.back();
    const handleOrdersClick = () => router.push(`/${slug}/orders`);
    if (!restaurant)
        return notFound()

    return (
        <div className="relative h-[250px] w-full bg-gray-600">
            <Button
                variant="secondary"
                size="icon"
                className="absolute left-4 top-4 z-50 rounded-full"
                onClick={handleBackClick}
            >
                <ChevronLeftIcon />
            </Button>
            {/* <Image
                src={restaurant.coverImageUrl}
                alt={restaurant.name}
                fill
                className="object-cover"
            /> */}
            <Button
                variant="secondary"
                size="icon"
                className="absolute right-4 top-4 z-50 rounded-full"
                onClick={handleOrdersClick}
            >
                <ScrollTextIcon />
            </Button>
        </div>
    );
};

export default RestaurantHeader;