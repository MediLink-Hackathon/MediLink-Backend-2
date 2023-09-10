USE MENTALINK
GO

INSERT INTO ACCOUNT VALUES 
('451','GigidHe','Gigid','He Chen','vnwe90bhjej342','2020-07-21','gigidhechen@email.com','+555550004859'),
('5849','Pol','Paul','Orozco','gdvrfbh5r','2020-07-28','polorozco@email.com','+555551115784'),
('45848','AndreSc','Andre','Schiaffino','vgergrdg34g','2021-08-08','andresc@email.com','+548880008569'),
('484','DahirVC','Dahir','Velazquez Jr.','afnu12qbeg8','2023-09-01','dahirvc@email.com',NULL),
('2321','medihacks','medi','hacks','optimus-utf8','2023-09-08','medihacks@medihacks.edu',NULL),
('468','mentallink','mental','link','ergeh34hqh34ah','2023-09-08','mentallink@mentallink.org',NULL)
GO

INSERT CITY (City_Name)
VALUES
('Mexicali'),
('Discord')
GO

INSERT INTO PSYCHOLOGIST VALUES 
('13','451',1,2,'2000-05-29','Cognitive','14554ZNGGF','2022-09-09','HHM',400,1),
('3','2321',2,1,'2023-09-08','General','99M2023H','2023-09-08','Hackathon',100,5),
('148','468',1,0,'2023-09-08','General','118sfGEGgfdh','2023-09-09','Medihack',NULL,NULL)
GO

INSERT INTO PATIENT VALUES 
('458','5849','13',1,0.00,'Depression',1,5),
('478','45848','13',1,0.00,'Anxiety',1,0),
('358','484',NULL,2,98.00,'PTSD',0,NULL)
GO

INSERT INTO VOLUNTEER VALUES 
('485','Saul','Pearson'),
('7889',NULL,NULL),
('32','William','Zavala'),
('322',NULL,NULL)
GO

INSERT SUPPORT_MESSAGE (Content)
VALUES
('You can do it!'),
('You are not alone'),
('We are here for you!'),
('You are stronger than you think'),
('You deserve a brighter tomorrow')
GO

INSERT FINANCIAL_TRANSACTION (idSender,idReceiver,Amount,Transaction_Date)
VALUES 
('485',NULL,399,'2020-07-29'),
('7889',NULL,1,'2020-07-30'),
(NULL,'451',400,'2020-07-30'),
('32','45848',400,'2021-08-20'),
('322','484',98,'2020-07-29')
GO

INSERT FUNDING (idTransaction,idMessage)
VALUES 
(4,4),
(5,5)
GO

INSERT DISTRIBUTOR (idTransaction,Current_Balance)
VALUES 
(1,399),
(2,400),
(3,0)
GO