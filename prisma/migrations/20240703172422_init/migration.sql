/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Newsletter` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Newsletter_email_key" ON "Newsletter"("email");
