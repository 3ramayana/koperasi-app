-- CreateTable
CREATE TABLE "tblSchool" (
    "school_id" TEXT NOT NULL,
    "school_name" VARCHAR(255) NOT NULL,
    "headmaster" TEXT NOT NULL,

    CONSTRAINT "tblSchool_pkey" PRIMARY KEY ("school_id")
);

-- CreateTable
CREATE TABLE "tblCustomers" (
    "customer_id" TEXT NOT NULL,
    "firstname" VARCHAR(255) NOT NULL,
    "lastname" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "contact" VARCHAR(255) NOT NULL,
    "gender" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "school_id" TEXT NOT NULL,
    "balance" INTEGER NOT NULL DEFAULT 0,
    "timestamp" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tblCustomers_pkey" PRIMARY KEY ("customer_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tblCustomers_email_key" ON "tblCustomers"("email");

-- AddForeignKey
ALTER TABLE "tblCustomers" ADD CONSTRAINT "tblCustomers_school_id_fkey" FOREIGN KEY ("school_id") REFERENCES "tblSchool"("school_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
