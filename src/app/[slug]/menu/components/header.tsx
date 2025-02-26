"use client";

import { Restaurant } from "@prisma/client";
import { Pick } from "@prisma/client/runtime/library";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

interface RestauranHeaderProps {
    restaurant: Pick<Restaurant, 'name' | 'coverImageUrl'>
}

const RestaurantHeader = ({ }: RestauranHeaderProps) => {
    const router = useRouter();

    return (
        <div className="relative h-[250px] w-full bg-slate-500">
            <Button variant="secondary" size="icon" className="absolute left-4 top-4 z-50 rounded-full"
                onClick={() => router.back()}>
                <ChevronLeftIcon />
            </Button>
            {/* <Image src={restaurant.coverImageUrl} fill alt={restaurant.name} className="object-cover" /> */}
            <Button variant="secondary" size="icon" className="absolute right-4 top-4 z-50 rounded-full">
                <ScrollTextIcon />
            </Button>
        </div>
    );
}

export default RestaurantHeader;