/*
  Warnings:

  - A unique constraint covering the columns `[slug,authorId]` on the table `recipes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[username]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Made the column `username` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "users" ALTER COLUMN "username" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "recipes_slug_authorId_key" ON "recipes"("slug", "authorId");

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");
