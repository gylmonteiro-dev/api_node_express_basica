-- CreateTable
CREATE TABLE "public"."turma" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "turno" TEXT NOT NULL,

    CONSTRAINT "turma_pkey" PRIMARY KEY ("id")
);
