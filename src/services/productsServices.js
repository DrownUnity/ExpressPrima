import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default class ProductService {

    constructor(){
        
    }

    async create(data) {
        return data
    }

    async find(){
        return prisma.product.findMany()
    }

    async findOne(id){
        return prisma.product.findUnique({
            where: {
                id: id
            }
        });
    }

    async update(id, changes){
        return prisma.product.update({
            where: {
                id
            },
            data: changes
        })
    }

    async delete(id){
        return prisma.product.delete({
            where: {
                id
            }
        })
    }

}