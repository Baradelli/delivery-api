-- CreateTable
CREATE TABLE `deliveryman` (
    `id` VARCHAR(191) NOT NULL,
    `userman` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `deliveryman_userman_key`(`userman`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
