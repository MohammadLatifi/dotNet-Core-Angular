using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class Patient
{
    public int PatientId { get; set; }

    public string? Name { get; set; }

    public int? Age { get; set; }

    public string? Gender { get; set; }

    public string? Address { get; set; }

    public string? Contact { get; set; }

    public virtual ICollection<Appointment> Appointments { get; set; } = new List<Appointment>();

    public virtual ICollection<Examination> Examinations { get; set; } = new List<Examination>();

    public virtual ICollection<FamilyHistory> FamilyHistories { get; set; } = new List<FamilyHistory>();

    public virtual ICollection<Medication> Medications { get; set; } = new List<Medication>();

    public virtual ICollection<Surgery> Surgeries { get; set; } = new List<Surgery>();
}
