using System;
using System.Collections.Generic;

namespace Backend.Models;

public partial class Appointment
{
    public int AppointmentId { get; set; }

    public int? PatientId { get; set; }

    public DateOnly? AppointmentDate { get; set; }

    public string? AppointmentType { get; set; }

    public virtual Patient? Patient { get; set; }
}
