using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class Medication
{
    public int MedicationId { get; set; }

    public string? MedicationName { get; set; }

    public string? Dosage { get; set; }

    public string? Frequency { get; set; }

    public int? PatientId { get; set; }

    public virtual Patient? Patient { get; set; }
}
