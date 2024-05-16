import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default class ProductService {

    async create(data) {
        return await prisma.product.create({
            data: {
                name: data.name,
                price: data.price,
                category: { connect: { id: data.category } },
                stock: data.stock
            }
        })
    }

    async find(){
        return await prisma.product.findMany()
    }

    async findOne(id){
        return await prisma.product.findUnique({
            where: {
                id: id,
            },
            include:{
                category: true,
            }
        });
    }

    async update(id, changes){
        return await prisma.product.update({
            where: {
                id
            },
            data: changes
        })
    }

    async delete(id){
        return await prisma.product.delete({
            where: {
                id
            }
        })
    }

}