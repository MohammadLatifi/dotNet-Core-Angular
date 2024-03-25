using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class FamilyHistory
{
    public int FamilyHistoryId { get; set; }

    public int? PatientId { get; set; }

    public string? Condition { get; set; }

    public string? Relationship { get; set; }

    public virtual Patient? Patient { get; set; }
}
