/*
  Warnings:

  - You are about to drop the `produto` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."produto";

-- CreateTable
CREATE TABLE "public"."aluno" (
    "id" SERIAL NOT NULL,
    "primeiro_nome" TEXT NOT NULL,
    "segundo_nome" TEXT NOT NULL,
    "natural" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "turmaId" INTEGER NOT NULL,

    CONSTRAINT "aluno_pkey" PRIMARY KEY ("id")
);
