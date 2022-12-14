/*
  Warnings:

  - You are about to drop the `CarrierOwer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RawmatOrder_to_rawMat_package` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ResidualOrder_to_package` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WareHouseToBuerResidualTransportJob` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `profileId` on the `User` table. All the data in the column will be lost.
  - The primary key for the `RecyclerAcceptedWaste` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `recylerId` on the `RecyclerAcceptedWaste` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `WareHouseToBuyersRawMatTransportJob` table. All the data in the column will be lost.
  - You are about to drop the column `rawMaterialCategoryId` on the `RawMatOrder` table. All the data in the column will be lost.
  - You are about to drop the column `categoryId` on the `ResidualOrder` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[wareHouseId,idustryWastePickupRequestId]` on the table `IndustryToWareHouseTransportJob` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Profile` table without a default value. This is not possible if the table is not empty.
  - Added the required column `recyclerId` to the `RecyclerAcceptedWaste` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "CarrierOwer_stuffId_key";

-- DropIndex
DROP INDEX "CarrierOwer_carrierId_key";

-- DropIndex
DROP INDEX "IndustryToRecyclerTransportJob_idustryWastePickupRequestId_key";

-- DropIndex
DROP INDEX "IndustryToWareHouseTransportJob_idustryWastePickupRequestId_key";

-- DropIndex
DROP INDEX "WareHouseToBuerResidualTransportJob_residualOrderId_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "CarrierOwer";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "RawmatOrder_to_rawMat_package";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "ResidualOrder_to_package";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "WareHouseToBuerResidualTransportJob";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "RawmatOrder_to_rawMat_packages" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "rawMaterialPackageId" INTEGER NOT NULL,
    "rawMatOrderId" INTEGER NOT NULL,
    CONSTRAINT "RawmatOrder_to_rawMat_packages_rawMatOrderId_fkey" FOREIGN KEY ("rawMatOrderId") REFERENCES "RawMatOrder" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "RawmatOrder_to_rawMat_packages_rawMaterialPackageId_fkey" FOREIGN KEY ("rawMaterialPackageId") REFERENCES "RawMaterialPackage" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ResidualOrder_to_packages" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "residualOrderId" INTEGER NOT NULL,
    "wastePackageId" INTEGER NOT NULL,
    CONSTRAINT "ResidualOrder_to_packages_residualOrderId_fkey" FOREIGN KEY ("residualOrderId") REFERENCES "ResidualOrder" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ResidualOrder_to_packages_wastePackageId_fkey" FOREIGN KEY ("wastePackageId") REFERENCES "WastePackage" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "IdustryPickUpReqToPackages" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idustryWastePickupRequestId" INTEGER NOT NULL,
    "wastePackageId" INTEGER NOT NULL,
    CONSTRAINT "IdustryPickUpReqToPackages_idustryWastePickupRequestId_fkey" FOREIGN KEY ("idustryWastePickupRequestId") REFERENCES "IdustryWastePickupRequest" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "IdustryPickUpReqToPackages_wastePackageId_fkey" FOREIGN KEY ("wastePackageId") REFERENCES "WastePackage" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CarrierOwner" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "carrierId" INTEGER NOT NULL,
    "stuffId" INTEGER NOT NULL,
    CONSTRAINT "CarrierOwner_carrierId_fkey" FOREIGN KEY ("carrierId") REFERENCES "Carrier" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CarrierOwner_stuffId_fkey" FOREIGN KEY ("stuffId") REFERENCES "TransportService_stuff_to_user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "IndustryToWareHouseTransportJob_packageMaping" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "industryToWareHouseTransportJobId" INTEGER NOT NULL,
    "wastePackageId" INTEGER NOT NULL,
    CONSTRAINT "IndustryToWareHouseTransportJob_packageMaping_industryToWareHouseTransportJobId_fkey" FOREIGN KEY ("industryToWareHouseTransportJobId") REFERENCES "IndustryToWareHouseTransportJob" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "IndustryToWareHouseTransportJob_packageMaping_wastePackageId_fkey" FOREIGN KEY ("wastePackageId") REFERENCES "WastePackage" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "IndustryToRecyclerTransportJob_maping" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "industryToRecyclerTransportJobId" INTEGER NOT NULL,
    "wastePackageId" INTEGER NOT NULL,
    CONSTRAINT "IndustryToRecyclerTransportJob_maping_industryToRecyclerTransportJobId_fkey" FOREIGN KEY ("industryToRecyclerTransportJobId") REFERENCES "IndustryToRecyclerTransportJob" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "IndustryToRecyclerTransportJob_maping_wastePackageId_fkey" FOREIGN KEY ("wastePackageId") REFERENCES "WastePackage" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "WareHouseToBuyersRawMatTransportJob_packageMaping" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "wareHouseToBuyersRawMatTransportJobId" INTEGER NOT NULL,
    "rawMaterialPackageId" INTEGER NOT NULL,
    CONSTRAINT "WareHouseToBuyersRawMatTransportJob_packageMaping_wareHouseToBuyersRawMatTransportJobId_fkey" FOREIGN KEY ("wareHouseToBuyersRawMatTransportJobId") REFERENCES "WareHouseToBuyersRawMatTransportJob" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "WareHouseToBuyersRawMatTransportJob_packageMaping_rawMaterialPackageId_fkey" FOREIGN KEY ("rawMaterialPackageId") REFERENCES "RawMaterialPackage" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "WareHouseToBuyerResidualTransportJob" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "wareHouseId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "carrierId" INTEGER NOT NULL,
    "residualOrderId" INTEGER NOT NULL,
    CONSTRAINT "WareHouseToBuyerResidualTransportJob_wareHouseId_fkey" FOREIGN KEY ("wareHouseId") REFERENCES "WareHouse" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "WareHouseToBuyerResidualTransportJob_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "WareHouseToBuyerResidualTransportJob_carrierId_fkey" FOREIGN KEY ("carrierId") REFERENCES "Carrier" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "WareHouseToBuyerResidualTransportJob_residualOrderId_fkey" FOREIGN KEY ("residualOrderId") REFERENCES "ResidualOrder" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "WareHouseToBuyerResidualTransportJob_packageMaping" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "wastePackageId" INTEGER NOT NULL,
    "wareHouseToBuyerResidualTransportJobId" INTEGER NOT NULL,
    CONSTRAINT "WareHouseToBuyerResidualTransportJob_packageMaping_wareHouseToBuyerResidualTransportJobId_fkey" FOREIGN KEY ("wareHouseToBuyerResidualTransportJobId") REFERENCES "WareHouseToBuyerResidualTransportJob" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "WareHouseToBuyerResidualTransportJob_packageMaping_wastePackageId_fkey" FOREIGN KEY ("wastePackageId") REFERENCES "WastePackage" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "roleId" INTEGER,
    CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_User" ("active", "email", "firstName", "id", "lastName", "roleId", "verified") SELECT "active", "email", "firstName", "id", "lastName", "roleId", "verified" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "User_firstName_lastName_key" ON "User"("firstName", "lastName");
CREATE TABLE "new_Profile" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "image" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Profile" ("address", "id", "image") SELECT "address", "id", "image" FROM "Profile";
DROP TABLE "Profile";
ALTER TABLE "new_Profile" RENAME TO "Profile";
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");
CREATE TABLE "new_RecyclerAcceptedWaste" (
    "recyclerId" INTEGER NOT NULL,
    "wasteCategoryId" INTEGER NOT NULL,

    PRIMARY KEY ("recyclerId", "wasteCategoryId"),
    CONSTRAINT "RecyclerAcceptedWaste_recyclerId_fkey" FOREIGN KEY ("recyclerId") REFERENCES "Recycler" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "RecyclerAcceptedWaste_wasteCategoryId_fkey" FOREIGN KEY ("wasteCategoryId") REFERENCES "WasteCategory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_RecyclerAcceptedWaste" ("wasteCategoryId") SELECT "wasteCategoryId" FROM "RecyclerAcceptedWaste";
DROP TABLE "RecyclerAcceptedWaste";
ALTER TABLE "new_RecyclerAcceptedWaste" RENAME TO "RecyclerAcceptedWaste";
CREATE TABLE "new_WareHouseToBuyersRawMatTransportJob" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "carrierId" INTEGER NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "rawMatOrderId" INTEGER NOT NULL,
    CONSTRAINT "WareHouseToBuyersRawMatTransportJob_carrierId_fkey" FOREIGN KEY ("carrierId") REFERENCES "Carrier" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "WareHouseToBuyersRawMatTransportJob_rawMatOrderId_fkey" FOREIGN KEY ("rawMatOrderId") REFERENCES "RawMatOrder" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_WareHouseToBuyersRawMatTransportJob" ("carrierId", "completed", "id", "rawMatOrderId") SELECT "carrierId", "completed", "id", "rawMatOrderId" FROM "WareHouseToBuyersRawMatTransportJob";
DROP TABLE "WareHouseToBuyersRawMatTransportJob";
ALTER TABLE "new_WareHouseToBuyersRawMatTransportJob" RENAME TO "WareHouseToBuyersRawMatTransportJob";
CREATE TABLE "new_RawMatOrder" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "quantity" REAL NOT NULL,
    CONSTRAINT "RawMatOrder_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_RawMatOrder" ("id", "quantity", "userId") SELECT "id", "quantity", "userId" FROM "RawMatOrder";
DROP TABLE "RawMatOrder";
ALTER TABLE "new_RawMatOrder" RENAME TO "RawMatOrder";
CREATE TABLE "new_ResidualOrder" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "quantity" REAL NOT NULL,
    CONSTRAINT "ResidualOrder_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ResidualOrder" ("id", "quantity", "userId") SELECT "id", "quantity", "userId" FROM "ResidualOrder";
DROP TABLE "ResidualOrder";
ALTER TABLE "new_ResidualOrder" RENAME TO "ResidualOrder";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "RawmatOrder_to_rawMat_packages_rawMaterialPackageId_rawMatOrderId_key" ON "RawmatOrder_to_rawMat_packages"("rawMaterialPackageId", "rawMatOrderId");

-- CreateIndex
CREATE UNIQUE INDEX "IdustryPickUpReqToPackages_idustryWastePickupRequestId_wastePackageId_key" ON "IdustryPickUpReqToPackages"("idustryWastePickupRequestId", "wastePackageId");

-- CreateIndex
CREATE UNIQUE INDEX "CarrierOwner_carrierId_key" ON "CarrierOwner"("carrierId");

-- CreateIndex
CREATE UNIQUE INDEX "CarrierOwner_stuffId_key" ON "CarrierOwner"("stuffId");

-- CreateIndex
CREATE UNIQUE INDEX "IndustryToWareHouseTransportJob_packageMaping_industryToWareHouseTransportJobId_wastePackageId_key" ON "IndustryToWareHouseTransportJob_packageMaping"("industryToWareHouseTransportJobId", "wastePackageId");

-- CreateIndex
CREATE UNIQUE INDEX "IndustryToRecyclerTransportJob_maping_industryToRecyclerTransportJobId_wastePackageId_key" ON "IndustryToRecyclerTransportJob_maping"("industryToRecyclerTransportJobId", "wastePackageId");

-- CreateIndex
CREATE UNIQUE INDEX "WareHouseToBuyersRawMatTransportJob_packageMaping_wareHouseToBuyersRawMatTransportJobId_rawMaterialPackageId_key" ON "WareHouseToBuyersRawMatTransportJob_packageMaping"("wareHouseToBuyersRawMatTransportJobId", "rawMaterialPackageId");

-- CreateIndex
CREATE UNIQUE INDEX "WareHouseToBuyerResidualTransportJob_residualOrderId_key" ON "WareHouseToBuyerResidualTransportJob"("residualOrderId");

-- CreateIndex
CREATE UNIQUE INDEX "IndustryToWareHouseTransportJob_wareHouseId_idustryWastePickupRequestId_key" ON "IndustryToWareHouseTransportJob"("wareHouseId", "idustryWastePickupRequestId");
