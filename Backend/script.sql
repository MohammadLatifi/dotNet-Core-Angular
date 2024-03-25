-- Create Patients table
CREATE TABLE Patients (
    PatientID INTEGER PRIMARY KEY AUTOINCREMENT,
    Name TEXT,
    Age INTEGER,
    Gender TEXT,
    Address TEXT,
    Contact TEXT
);

-- Insert sample data into Patients table
INSERT INTO Patients (Name, Age, Gender, Address, Contact) VALUES 
    ('John Doe', 45, 'Male', '123 Main St, City, Country', 'john.doe@example.com'),
    ('Jane Smith', 32, 'Female', '456 Elm St, Town, Country', 'jane.smith@example.com'),
    ('Michael Johnson', 55, 'Male', '789 Oak St, Village, Country', 'michael.johnson@example.com'),
    ('Emily Davis', 40, 'Female', '101 Pine St, Town, Country', 'emily.davis@example.com'),
    ('David Brown', 65, 'Male', '321 Maple St, City, Country', 'david.brown@example.com');

-- Create Examinations table
CREATE TABLE Examinations (
    ExamID INTEGER PRIMARY KEY AUTOINCREMENT,
    PatientID INTEGER,
    ExamDate TEXT,
    VisualAcuity TEXT,
    IntraocularPressure INTEGER,
    Diagnosis TEXT,
    FOREIGN KEY (PatientID) REFERENCES Patients(PatientID) ON DELETE SET NULL
);

-- Insert sample data into Examinations table
INSERT INTO Examinations (PatientID, ExamDate, VisualAcuity, IntraocularPressure, Diagnosis) VALUES 
    (1, '2024-03-09', '20/20', 14, 'Normal'),
    (1, '2024-01-20', '20/25', 16, 'Mild Myopia'),
    (1, '2023-12-15', '20/20', 15, 'Cataract'),
    (1, '2023-10-10', '20/30', 18, 'Glaucoma'),
    (1, '2023-08-05', '20/20', 14, 'Normal'),
    (2, '2024-03-10', '20/30', 16, 'Myopia'),
    (2, '2023-11-20', '20/40', 18, 'Cataract'),
    (2, '2023-09-15', '20/25', 15, 'Normal'),
    (2, '2023-07-10', '20/30', 16, 'Astigmatism'),
    (2, '2023-05-05', '20/20', 14, 'Normal'),
    (3, '2024-02-15', '20/20', 14, 'Normal'),
    (3, '2023-10-30', '20/25', 15, 'Presbyopia'),
    (3, '2023-08-25', '20/20', 14, 'Normal'),
    (3, '2023-06-20', '20/30', 16, 'Cataract'),
    (3, '2023-04-15', '20/20', 14, 'Normal'),
    (4, '2024-01-10', '20/20', 14, 'Normal'),
    (4, '2023-09-25', '20/20', 14, 'Normal'),
    (4, '2023-07-20', '20/30', 16, 'Presbyopia'),
    (4, '2023-05-15', '20/20', 14, 'Normal'),
    (4, '2023-03-10', '20/40', 18, 'Cataract'),
    (5, '2024-02-05', '20/20', 14, 'Normal'),
    (5, '2023-12-20', '20/25', 15, 'Myopia'),
    (5, '2023-10-15', '20/20', 14, 'Normal'),
    (5, '2023-08-10', '20/30', 16, 'Astigmatism'),
    (5, '2023-06-05', '20/20', 14, 'Normal');

-- Create Medications table
CREATE TABLE Medications (
    MedicationID INTEGER PRIMARY KEY AUTOINCREMENT,
    MedicationName TEXT,
    Dosage TEXT,
    Frequency TEXT,
    PatientID INTEGER,
    FOREIGN KEY (PatientID) REFERENCES Patients(PatientID) ON DELETE SET NULL
);

-- Insert sample data into Medications table
INSERT INTO Medications (MedicationName, Dosage, Frequency, PatientID) VALUES 
    ('Latanoprost', '0.005%', 'Once daily', 1),
    ('Brimonidine', '0.1%', 'Twice daily', 2),
    ('Timolol', '0.5%', 'Once daily', 3),
    ('Dorzolamide', '2%', 'Twice daily', 4),
    ('Pilocarpine', '1%', 'Three times daily', 5);

-- Create Surgeries table
CREATE TABLE Surgeries (
    SurgeryID INTEGER PRIMARY KEY AUTOINCREMENT,
    SurgeryType TEXT,
    SurgeryDate TEXT,
    SurgeonName TEXT,
    PatientID INTEGER,
    FOREIGN KEY (PatientID) REFERENCES Patients(PatientID) ON DELETE SET NULL
);

-- Insert sample data into Surgeries table
INSERT INTO Surgeries (SurgeryType, SurgeryDate, SurgeonName, PatientID) VALUES 
    ('Cataract Surgery', '2024-01-15', 'Dr. Smith', 1),
    ('Laser Eye Surgery', '2024-02-20', 'Dr. Johnson', 2),
    ('Corneal Transplant', '2024-03-05', 'Dr. White', 3),
    ('Retinal Detachment Surgery', '2023-12-10', 'Dr. Lee', 4),
    ('Glaucoma Surgery', '2023-10-25', 'Dr. Martinez', 5);

-- Create FamilyHistory table
CREATE TABLE FamilyHistory (
    FamilyHistoryID INTEGER PRIMARY KEY AUTOINCREMENT,
    PatientID INTEGER,
    Condition TEXT,
    Relationship TEXT,
    FOREIGN KEY (PatientID) REFERENCES Patients(PatientID) ON DELETE SET NULL
);

-- Insert sample data into FamilyHistory table
INSERT INTO FamilyHistory (PatientID, Condition, Relationship) VALUES 
    (1, 'Glaucoma', 'Mother'),
    (1, 'Cataract', 'Father'),
    (2, 'Macular Degeneration', 'Mother'),
    (2, 'Diabetic Retinopathy', 'Father'),
    (3, 'Myopia', 'Sister'),
    (4, 'Cataract', 'Brother'),
    (5, 'Glaucoma', 'Grandfather'),
    (5, 'Macular Degeneration', 'Grandmother');

-- Create Appointments table
CREATE TABLE Appointments (
    AppointmentID INTEGER PRIMARY KEY AUTOINCREMENT,
    PatientID INTEGER,
    AppointmentDate TEXT,
    AppointmentType TEXT,
    FOREIGN KEY (PatientID) REFERENCES Patients(PatientID) ON DELETE SET NULL
);

-- Insert sample data into Appointments table
INSERT INTO Appointments (PatientID, AppointmentDate, AppointmentType) VALUES 
    (1, '2024-03-20', 'Follow-up'),
    (1, '2024-04-05', 'Consultation'),
    (2, '2024-03-25', 'Follow-up'),
    (2, '2024-04-10', 'Consultation'),
    (3, '2024-02-20', 'Follow-up'),
    (3, '2024-03-05', 'Consultation'),
    (4, '2024-02-15', 'Follow-up'),
    (4, '2024-03-01', 'Consultation'),
    (5, '2024-03-10', 'Follow-up'),
    (5, '2024-03-25', 'Consultation');
