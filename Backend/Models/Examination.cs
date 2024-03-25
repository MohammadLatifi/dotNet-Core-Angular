using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class Examination
{
    public int ExamId { get; set; }

    public int? PatientId { get; set; }

    public DateOnly? ExamDate { get; set; }

    public string? VisualAcuity { get; set; }

    public int? IntraocularPressure { get; set; }

    public string? Diagnosis { get; set; }

    public virtual Patient? Patient { get; set; }
}
