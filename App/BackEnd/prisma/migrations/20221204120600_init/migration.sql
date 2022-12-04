-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "roleId" INTEGER,
    "profileId" INTEGER,
    CONSTRAINT "User_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "User_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "image" TEXT NOT NULL,
    "address" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Role" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "role" TEXT NOT NULL DEFAULT 'USER'
);

-- CreateTable
CREATE TABLE "RawMatOrder" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "rawMaterialCategoryId" INTEGER NOT NULL,
    "quantity" REAL NOT NULL,
    CONSTRAINT "RawMatOrder_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "RawMatOrder_rawMaterialCategoryId_fkey" FOREIGN KEY ("rawMaterialCategoryId") REFERENCES "RawMaterialCategory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ResidualOrder" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "quantity" REAL NOT NULL,
    CONSTRAINT "ResidualOrder_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ResidualOrder_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "WasteCategory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "RawmatOrder_to_rawMat_package" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "rawMaterialPackageId" INTEGER NOT NULL,
    "residualOrderId" INTEGER NOT NULL,
    CONSTRAINT "RawmatOrder_to_rawMat_package_residualOrderId_fkey" FOREIGN KEY ("residualOrderId") REFERENCES "ResidualOrder" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "RawmatOrder_to_rawMat_package_rawMaterialPackageId_fkey" FOREIGN KEY ("rawMaterialPackageId") REFERENCES "RawMaterialPackage" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ResidualOrder_to_package" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "wareHouseToBuerResidualTransportJobId" INTEGER NOT NULL,
    "wastePackageId" INTEGER NOT NULL,
    CONSTRAINT "ResidualOrder_to_package_wareHouseToBuerResidualTransportJobId_fkey" FOREIGN KEY ("wareHouseToBuerResidualTransportJobId") REFERENCES "WareHouseToBuerResidualTransportJob" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ResidualOrder_to_package_wastePackageId_fkey" FOREIGN KEY ("wastePackageId") REFERENCES "WastePackage" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Industry" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "Industry_admin_to_user" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "industryId" INTEGER NOT NULL,
    "assigned" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Industry_admin_to_user_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Industry_admin_to_user_industryId_fkey" FOREIGN KEY ("industryId") REFERENCES "Industry" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Industry_stuff_to_user" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "industryId" INTEGER NOT NULL,
    "assigned" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Industry_stuff_to_user_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Industry_stuff_to_user_industryId_fkey" FOREIGN KEY ("industryId") REFERENCES "Industry" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "IdustryWastePickupRequest" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdDate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "canceled" BOOLEAN NOT NULL DEFAULT false,
    "picked" BOOLEAN NOT NULL DEFAULT false,
    "industryId" INTEGER NOT NULL,
    CONSTRAINT "IdustryWastePickupRequest_industryId_fkey" FOREIGN KEY ("industryId") REFERENCES "Industry" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Recycler" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "Recycler_admin_to_user" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "recyclerId" INTEGER NOT NULL,
    "assigned" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Recycler_admin_to_user_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Recycler_admin_to_user_recyclerId_fkey" FOREIGN KEY ("recyclerId") REFERENCES "Recycler" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Recycler_stuff_to_user" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "recyclerId" INTEGER NOT NULL,
    "assigned" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Recycler_stuff_to_user_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Recycler_stuff_to_user_recyclerId_fkey" FOREIGN KEY ("recyclerId") REFERENCES "Recycler" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "RecyclerAcceptedWaste" (
    "recylerId" INTEGER NOT NULL,
    "wasteCategoryId" INTEGER NOT NULL,

    PRIMARY KEY ("recylerId", "wasteCategoryId"),
    CONSTRAINT "RecyclerAcceptedWaste_recylerId_fkey" FOREIGN KEY ("recylerId") REFERENCES "Recycler" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "RecyclerAcceptedWaste_wasteCategoryId_fkey" FOREIGN KEY ("wasteCategoryId") REFERENCES "WasteCategory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "TransportService" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "TransportService_admin_to_user" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "transportServiceId" INTEGER NOT NULL,
    "assigned" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "TransportService_admin_to_user_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "TransportService_admin_to_user_transportServiceId_fkey" FOREIGN KEY ("transportServiceId") REFERENCES "TransportService" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "TransportService_stuff_to_user" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "transportServiceId" INTEGER NOT NULL,
    "assigned" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "TransportService_stuff_to_user_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "TransportService_stuff_to_user_transportServiceId_fkey" FOREIGN KEY ("transportServiceId") REFERENCES "TransportService" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Carrier" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "capacity" REAL NOT NULL,
    "type" INTEGER NOT NULL,
    "transportServiceId" INTEGER NOT NULL,
    CONSTRAINT "Carrier_transportServiceId_fkey" FOREIGN KEY ("transportServiceId") REFERENCES "TransportService" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CarrierOwer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "carrierId" INTEGER NOT NULL,
    "stuffId" INTEGER NOT NULL,
    CONSTRAINT "CarrierOwer_carrierId_fkey" FOREIGN KEY ("carrierId") REFERENCES "Carrier" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CarrierOwer_stuffId_fkey" FOREIGN KEY ("stuffId") REFERENCES "TransportService_stuff_to_user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "IndustryToWareHouseTransportJob" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "wareHouseId" INTEGER NOT NULL,
    "carrierId" INTEGER NOT NULL,
    "idustryWastePickupRequestId" INTEGER NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "IndustryToWareHouseTransportJob_wareHouseId_fkey" FOREIGN KEY ("wareHouseId") REFERENCES "WareHouse" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "IndustryToWareHouseTransportJob_carrierId_fkey" FOREIGN KEY ("carrierId") REFERENCES "Carrier" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "IndustryToWareHouseTransportJob_idustryWastePickupRequestId_fkey" FOREIGN KEY ("idustryWastePickupRequestId") REFERENCES "IdustryWastePickupRequest" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "IndustryToRecyclerTransportJob" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "recyclerId" INTEGER NOT NULL,
    "carrierId" INTEGER NOT NULL,
    "idustryWastePickupRequestId" INTEGER NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "IndustryToRecyclerTransportJob_recyclerId_fkey" FOREIGN KEY ("recyclerId") REFERENCES "Recycler" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "IndustryToRecyclerTransportJob_carrierId_fkey" FOREIGN KEY ("carrierId") REFERENCES "Carrier" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "IndustryToRecyclerTransportJob_idustryWastePickupRequestId_fkey" FOREIGN KEY ("idustryWastePickupRequestId") REFERENCES "IdustryWastePickupRequest" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "WareHouseToRecyclerTransportJob" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "wareHouseId" INTEGER NOT NULL,
    "recyclerId" INTEGER NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "carrierId" INTEGER NOT NULL,
    CONSTRAINT "WareHouseToRecyclerTransportJob_wareHouseId_fkey" FOREIGN KEY ("wareHouseId") REFERENCES "WareHouse" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "WareHouseToRecyclerTransportJob_recyclerId_fkey" FOREIGN KEY ("recyclerId") REFERENCES "Recycler" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "WareHouseToRecyclerTransportJob_carrierId_fkey" FOREIGN KEY ("carrierId") REFERENCES "Carrier" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "RecyclerToWareHouseTransportJob" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "recyclerId" INTEGER NOT NULL,
    "wareHouseId" INTEGER NOT NULL,
    "carrierId" INTEGER NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "RecyclerToWareHouseTransportJob_recyclerId_fkey" FOREIGN KEY ("recyclerId") REFERENCES "Recycler" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "RecyclerToWareHouseTransportJob_wareHouseId_fkey" FOREIGN KEY ("wareHouseId") REFERENCES "WareHouse" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "RecyclerToWareHouseTransportJob_carrierId_fkey" FOREIGN KEY ("carrierId") REFERENCES "Carrier" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "WareHouseToBuyersRawMatTransportJob" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "carrierId" INTEGER NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "rawMatOrderId" INTEGER NOT NULL,
    CONSTRAINT "WareHouseToBuyersRawMatTransportJob_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "WareHouseToBuyersRawMatTransportJob_carrierId_fkey" FOREIGN KEY ("carrierId") REFERENCES "Carrier" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "WareHouseToBuyersRawMatTransportJob_rawMatOrderId_fkey" FOREIGN KEY ("rawMatOrderId") REFERENCES "RawMatOrder" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "WareHouseToBuerResidualTransportJob" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "wareHouseId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "carrierId" INTEGER NOT NULL,
    "residualOrderId" INTEGER NOT NULL,
    CONSTRAINT "WareHouseToBuerResidualTransportJob_wareHouseId_fkey" FOREIGN KEY ("wareHouseId") REFERENCES "WareHouse" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "WareHouseToBuerResidualTransportJob_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "WareHouseToBuerResidualTransportJob_carrierId_fkey" FOREIGN KEY ("carrierId") REFERENCES "Carrier" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "WareHouseToBuerResidualTransportJob_residualOrderId_fkey" FOREIGN KEY ("residualOrderId") REFERENCES "ResidualOrder" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "WareHouse2RecyclerJob_to_packages" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "wareHouseToRecyclerTransportJobId" INTEGER NOT NULL,
    "wastePackageId" INTEGER NOT NULL,
    CONSTRAINT "WareHouse2RecyclerJob_to_packages_wareHouseToRecyclerTransportJobId_fkey" FOREIGN KEY ("wareHouseToRecyclerTransportJobId") REFERENCES "WareHouseToRecyclerTransportJob" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "WareHouse2RecyclerJob_to_packages_wastePackageId_fkey" FOREIGN KEY ("wastePackageId") REFERENCES "WastePackage" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Recycler2WareHouseJob_to_packages" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "recyclerToWarehouseTransportJobId" INTEGER NOT NULL,
    "wastePackageId" INTEGER NOT NULL,
    CONSTRAINT "Recycler2WareHouseJob_to_packages_recyclerToWarehouseTransportJobId_fkey" FOREIGN KEY ("recyclerToWarehouseTransportJobId") REFERENCES "RecyclerToWareHouseTransportJob" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Recycler2WareHouseJob_to_packages_wastePackageId_fkey" FOREIGN KEY ("wastePackageId") REFERENCES "WastePackage" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "WareHouse" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "verified" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "WareHouse_admin_to_user" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "warehouseId" INTEGER NOT NULL,
    "assigned" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "WareHouse_admin_to_user_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "WareHouse_admin_to_user_warehouseId_fkey" FOREIGN KEY ("warehouseId") REFERENCES "WareHouse" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "WareHouse_stuff_to_user" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "warehouseId" INTEGER NOT NULL,
    "assigned" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "WareHouse_stuff_to_user_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "WareHouse_stuff_to_user_warehouseId_fkey" FOREIGN KEY ("warehouseId") REFERENCES "WareHouse" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Stock" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "wasteCategoryId" INTEGER NOT NULL,
    "wareHouseId" INTEGER NOT NULL,
    CONSTRAINT "Stock_wasteCategoryId_fkey" FOREIGN KEY ("wasteCategoryId") REFERENCES "WasteCategory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Stock_wareHouseId_fkey" FOREIGN KEY ("wareHouseId") REFERENCES "WareHouse" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "WasteCategory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "WastePackage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "weight" REAL NOT NULL,
    "wasteCategoryId" INTEGER NOT NULL,
    CONSTRAINT "WastePackage_wasteCategoryId_fkey" FOREIGN KEY ("wasteCategoryId") REFERENCES "WasteCategory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "RawMaterialCategory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "RawMaterialPackage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "weight" REAL NOT NULL,
    "rawMaterialCategoryId" INTEGER NOT NULL,
    CONSTRAINT "RawMaterialPackage_rawMaterialCategoryId_fkey" FOREIGN KEY ("rawMaterialCategoryId") REFERENCES "RawMaterialCategory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_firstName_lastName_key" ON "User"("firstName", "lastName");

-- CreateIndex
CREATE UNIQUE INDEX "Role_role_key" ON "Role"("role");

-- CreateIndex
CREATE UNIQUE INDEX "Industry_name_key" ON "Industry"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Industry_admin_to_user_userId_industryId_key" ON "Industry_admin_to_user"("userId", "industryId");

-- CreateIndex
CREATE UNIQUE INDEX "Industry_stuff_to_user_userId_industryId_key" ON "Industry_stuff_to_user"("userId", "industryId");

-- CreateIndex
CREATE UNIQUE INDEX "Recycler_name_key" ON "Recycler"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Recycler_admin_to_user_userId_recyclerId_key" ON "Recycler_admin_to_user"("userId", "recyclerId");

-- CreateIndex
CREATE UNIQUE INDEX "Recycler_stuff_to_user_userId_recyclerId_key" ON "Recycler_stuff_to_user"("userId", "recyclerId");

-- CreateIndex
CREATE UNIQUE INDEX "TransportService_name_key" ON "TransportService"("name");

-- CreateIndex
CREATE UNIQUE INDEX "TransportService_admin_to_user_userId_transportServiceId_key" ON "TransportService_admin_to_user"("userId", "transportServiceId");

-- CreateIndex
CREATE UNIQUE INDEX "TransportService_stuff_to_user_userId_transportServiceId_key" ON "TransportService_stuff_to_user"("userId", "transportServiceId");

-- CreateIndex
CREATE UNIQUE INDEX "CarrierOwer_carrierId_key" ON "CarrierOwer"("carrierId");

-- CreateIndex
CREATE UNIQUE INDEX "CarrierOwer_stuffId_key" ON "CarrierOwer"("stuffId");

-- CreateIndex
CREATE UNIQUE INDEX "IndustryToWareHouseTransportJob_idustryWastePickupRequestId_key" ON "IndustryToWareHouseTransportJob"("idustryWastePickupRequestId");

-- CreateIndex
CREATE UNIQUE INDEX "IndustryToRecyclerTransportJob_idustryWastePickupRequestId_key" ON "IndustryToRecyclerTransportJob"("idustryWastePickupRequestId");

-- CreateIndex
CREATE UNIQUE INDEX "WareHouseToBuyersRawMatTransportJob_rawMatOrderId_key" ON "WareHouseToBuyersRawMatTransportJob"("rawMatOrderId");

-- CreateIndex
CREATE UNIQUE INDEX "WareHouseToBuerResidualTransportJob_residualOrderId_key" ON "WareHouseToBuerResidualTransportJob"("residualOrderId");

-- CreateIndex
CREATE UNIQUE INDEX "WareHouse_name_key" ON "WareHouse"("name");

-- CreateIndex
CREATE UNIQUE INDEX "WareHouse_admin_to_user_userId_warehouseId_key" ON "WareHouse_admin_to_user"("userId", "warehouseId");

-- CreateIndex
CREATE UNIQUE INDEX "WareHouse_stuff_to_user_userId_warehouseId_key" ON "WareHouse_stuff_to_user"("userId", "warehouseId");

-- CreateIndex
CREATE UNIQUE INDEX "RawMaterialCategory_name_key" ON "RawMaterialCategory"("name");
