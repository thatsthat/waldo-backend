-- CreateTable
CREATE TABLE "Character" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "coordinates" INTEGER[],

    CONSTRAINT "Character_pkey" PRIMARY KEY ("id")
);
