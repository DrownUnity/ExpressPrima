import { products } from "./products.js";
import { categories } from "./categories.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function categoriesSeed() {
    try {
        for (let category of categories) {
            await prisma.category.create({
                data: category
            });
        }
        console.log("Categories created successfully.");
    } catch (error) {
        console.error("Error creating categories:", error);
    }
}

async function productsSeed() {
    try {
        for (let product of products) {
            await prisma.product.create({
                data: product
            });
        }
        console.log("Products created successfully.");
    } catch (error) {
        console.error("Error creating products:", error);
    }
}

async function seed() {
    try {
        await Promise.all([categoriesSeed(), productsSeed()]);
    } catch (error) {
        console.error("Error seeding data:", error);
    } finally {
        await prisma.$disconnect();
    }
}

seed();
