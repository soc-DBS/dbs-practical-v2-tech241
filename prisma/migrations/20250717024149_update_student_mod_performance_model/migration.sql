/*
  Warnings:

  - You are about to drop the `student_performance` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "student_performance";

-- CreateTable
CREATE TABLE "student_mod_performance" (
    "adm_no" CHAR(4) NOT NULL,
    "mod_registered" VARCHAR(10) NOT NULL,
    "mark" INTEGER NOT NULL,
    "grade" CHAR(2) NOT NULL,

    CONSTRAINT "student_mod_performance_pkey" PRIMARY KEY ("adm_no","mod_registered")
);
