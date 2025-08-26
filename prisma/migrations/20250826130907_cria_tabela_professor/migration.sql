-- CreateTable
CREATE TABLE "public"."professor" (
    "id" SERIAL NOT NULL,
    "primeiro_nome" TEXT NOT NULL,
    "segundo_nome" TEXT NOT NULL,
    "natural" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "materia" TEXT NOT NULL,

    CONSTRAINT "professor_pkey" PRIMARY KEY ("id")
);
