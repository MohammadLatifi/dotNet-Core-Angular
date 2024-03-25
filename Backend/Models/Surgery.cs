using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class Surgery
{
    public int SurgeryId { get; set; }

    public string? SurgeryType { get; set; }

    public DateOnly? SurgeryDate { get; set; }

    public string? SurgeonName { get; set; }

    public int? PatientId { get; set; }

    public virtual Patient? Patient { get; set; }
}
