import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  /* const newUser = await prisma.user.create({
    data: {
      name: "pepe",
      email: "pepe@gmail.com",
    }
  })
  console.log(newUser) */

  /* const users = await prisma.user.findMany();
  console.log(users);

  users.map((user) => {
    console.log(`${user.id} - ${user.name}`);
  }); */

  /* const users = await prisma.user.findFirst({
    where:{
        //id: 2

        //email: "luismanuel.rincon24@gmail.com",
        //id: 1

        OR: [
            {id:1},
            {email:"rincon24@gmail.com"}
        ]
    }
  }) */

  /* const user = await prisma.user.delete({
    where: {
      id: 2,
    },
  });
  console.log(user); */

  /*const users = await prisma.user.findMany();
  console.log(users); */

  /* try {
    const user = await prisma.user.delete({
      where: {
        id: 2,
      },
    });
    console.log(user);

    const users = await prisma.user.findMany();
    console.log(users);
  } catch (error) {

console.log(error.message)

  } */

  /* const user = await prisma.user.update({
    where: {
      id: 5,
    },
    data: {
      lastname: "kaido",
    },
  });
  console.log(user); */

  /* const result = await prisma.user.updateMany({
    where: {
      name: "juan",
    },
    data: {
      lastname: "uev0_kaido",
    },
  });
  console.log(result); */

  /* const result = await prisma.user.update({
    where: {
      email: "jeanna@gmail.com",
    },
    data: {
      lastname: null,
    },
  });
  console.log(result);
 */

  /* const user = await prisma.user.upsert({
    where: {
      email: "jhon@gmail.com",
    },
    create: {
        email:"jhon@email.com",
      name: "jhon",
    },
    update: {
      lastname: "wacho",
    },
  }); */

  /* await prisma.user.delete({ where: { id: 3 } }); */

  /* const user = await prisma.user.upsert({
    where: {
      email: "jhon@gmail.com",
    },
    create: {
        email:"jhon@email.com",
      name: "jhon",
    },
    update: {
      lastname: "wacho",
    },
  });  */

  // Inicio con la tabla post

  /* const newPost = await prisma.post.create({
    data: {
      title: "Mi primer publicacion",
      content: "esta es mi primer post",
      author: {
        connect: {
          id: newUser.id,
        },
      },
    },
  }); */

  const users = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });
  users.forEach((user) => {
    console.log("-----------");
    console.log(`User: ${user.name}`);
    console.log(`Email: ${user.email}`);

    user.posts.forEach((post, i) => {
      console.log(`${i}. ${post.title} ${post.content}`);
    });
  });
}
main();
