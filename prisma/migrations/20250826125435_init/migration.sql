-- CreateTable
CREATE TABLE "public"."produto" (
    "id" SERIAL NOT NULL,
    "primeiro_nome" TEXT NOT NULL,
    "segundo_nome" TEXT NOT NULL,
    "natural" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,

    CONSTRAINT "produto_pkey" PRIMARY KEY ("id")
);
