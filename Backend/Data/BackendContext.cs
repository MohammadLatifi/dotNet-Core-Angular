using System;
using System.Collections.Generic;
using Backend.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data;

public partial class BackendContext : DbContext
{
    public BackendContext(DbContextOptions<BackendContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Appointment> Appointments { get; set; }

    public virtual DbSet<Examination> Examinations { get; set; }

    public virtual DbSet<FamilyHistory> FamilyHistories { get; set; }

    public virtual DbSet<Medication> Medications { get; set; }

    public virtual DbSet<Patient> Patients { get; set; }

    public virtual DbSet<Surgery> Surgeries { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Appointment>(entity =>
        {
            entity.Property(e => e.AppointmentId).HasColumnName("AppointmentID");
            entity.Property(e => e.PatientId).HasColumnName("PatientID");

            entity.HasOne(d => d.Patient).WithMany(p => p.Appointments)
                .HasForeignKey(d => d.PatientId)
                .OnDelete(DeleteBehavior.SetNull);
        });

        modelBuilder.Entity<Examination>(entity =>
        {
            entity.HasKey(e => e.ExamId);

            entity.Property(e => e.ExamId).HasColumnName("ExamID");
            entity.Property(e => e.PatientId).HasColumnName("PatientID");

            entity.HasOne(d => d.Patient).WithMany(p => p.Examinations)
                .HasForeignKey(d => d.PatientId)
                .OnDelete(DeleteBehavior.SetNull);
        });

        modelBuilder.Entity<FamilyHistory>(entity =>
        {
            entity.ToTable("FamilyHistory");

            entity.Property(e => e.FamilyHistoryId).HasColumnName("FamilyHistoryID");
            entity.Property(e => e.PatientId).HasColumnName("PatientID");

            entity.HasOne(d => d.Patient).WithMany(p => p.FamilyHistories)
                .HasForeignKey(d => d.PatientId)
                .OnDelete(DeleteBehavior.SetNull);
        });

        modelBuilder.Entity<Medication>(entity =>
        {
            entity.Property(e => e.MedicationId).HasColumnName("MedicationID");
            entity.Property(e => e.PatientId).HasColumnName("PatientID");

            entity.HasOne(d => d.Patient).WithMany(p => p.Medications)
                .HasForeignKey(d => d.PatientId)
                .OnDelete(DeleteBehavior.SetNull);
        });

        modelBuilder.Entity<Patient>(entity =>
        {
            entity.Property(e => e.PatientId).HasColumnName("PatientID");
        });

        modelBuilder.Entity<Surgery>(entity =>
        {
            entity.Property(e => e.SurgeryId).HasColumnName("SurgeryID");
            entity.Property(e => e.PatientId).HasColumnName("PatientID");

            entity.HasOne(d => d.Patient).WithMany(p => p.Surgeries)
                .HasForeignKey(d => d.PatientId)
                .OnDelete(DeleteBehavior.SetNull);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
