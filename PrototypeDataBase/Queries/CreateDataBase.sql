create database MENTALINK
go 

use MENTALINK
GO 

Create table ACCOUNT(
	idAccount varchar(228) primary key,
	Display_Name varchar(35) unique NOT NULL,
	First_Name varchar(35) NOT NULL,
	Last_Name varchar(35) NOT NULL,
	Account_Password varchar(60) NOT NULL,
	Creation_Date date NOT NULL,
	Email varchar(254) NOT NULL, 
	Phone varchar(15)
)
GO

Create table CITY(
	idCity int identity(1,1) primary key,
	City_Name varchar(25) NOT NULL
)

Create table PSYCHOLOGIST(
	idPsychologist varchar(228) primary key,
	idAccount varchar(228) references ACCOUNT(idAccount) NOT NULL,
	idCity int references CITY(idCity) NOT NULL,
	Psychologist_Status int NOT NULL,
	Date_Of_Birth date NOT NULL,
	Speciality varchar(25) NOT NULL,
	License_Number varchar(100) unique NOT NULL,
	Practicing_Since date NOT NULL,
	Psychologist_Membership varchar(20) NOT NULL,
	Fee decimal(11,2),
	External_Review int
)
GO

Create table PATIENT(
	idPatient varchar(228) primary key,
	idAccount varchar(228) references ACCOUNT(idAccount) NOT NULL,
	idPsychologist varchar(228) references PSYCHOLOGIST(idPsychologist),
	idCity int references CITY(idCity) NOT NULL,
	Credit decimal(11,2) NOT NULL,
	About_Me varchar(1000) NOT NULL,
	Patient_Status int NOT NULL,
	Appointment_Review int
)
GO

Create table VOLUNTEER(
	idVolunteer varchar(228) primary key,
	First_Name varchar(35),
	Last_Name varchar(35),
)
GO

Create table SUPPORT_MESSAGE(
	idMessage int identity(1,1) primary key,
	Content varchar(100) NOT NULL
)
GO

Create table FINANCIAL_TRANSACTION(
	idTransaction int identity(1,1) primary key,
	idSender varchar(228) references VOLUNTEER(idVolunteer),
	idReceiver varchar(228) references ACCOUNT(idAccount),
	Amount decimal(11,2) NOT NULL,
	Transaction_Date date NOT NULL,
)
GO

Create table FUNDING(
	idFunding int identity(1,1) primary key,
	idTransaction int references FINANCIAL_TRANSACTION(idTransaction) NOT NULL,
	idMessage int references SUPPORT_MESSAGE(idMessage)
)
GO

Create table DISTRIBUTOR(
	idDistributor int identity(1,1) primary key,
	idTransaction int references FINANCIAL_TRANSACTION(idTransaction) NOT NULL,
	Current_Balance decimal(11,2) NOT NULL
)
GO