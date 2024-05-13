import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default class CategoryService {

    constructor(){
    }
    async create(data) {
      return await prisma.category.create({
        where:{
          data: data
        }
      })
    }
  
    async find() {
      return await prisma.category.findMany();
    }
  
    async findOne(id) {
      return await prisma.category.findUnique({
        where: {
          id
        }
      })
    }
  
    async update(id, changes) {
      return await prisma.category.update({
        where: {
            id
        },
        data: changes
    })
    }
  
    async delete(id) {
      return await prisma.category.delete({
        where: {
          id
        }
      });
    }
  
  }

