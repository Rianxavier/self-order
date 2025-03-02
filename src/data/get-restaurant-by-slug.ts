import { db } from "@/lib/prisma"

export const getRestaurantBySlug = async (slug: string) => {
    const restaurant = await db.restaurant.findUnique({ where: { slug } })
    return restaurant
}

export const getRestaurantWithCategoriesAndProducts = async (slug: string) => {
    const restaurant = await db.restaurant.findUnique({
        where: { slug },
        include: {
            menuCategory: {
                include: { products: true }
            }
        }
    })
    return restaurant
}