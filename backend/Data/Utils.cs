namespace ChatApp.Data;

using Grpc.Core;

public class DataLayerException : Exception
{
    public string SqlState { get; private set; }

    public DataLayerException()
    {
    }

    public DataLayerException(string message)
        : base(message)
    {
    }

    public DataLayerException(string message, Exception innerException)
        : base(message, innerException)
    {
    }

    public DataLayerException(string message, string sqlState, Exception innerException)
        : base(message, innerException)
    {
        this.SqlState = sqlState;
    }

    public StatusCode ToGrpcStatusCode()
    {
        switch (SqlState)
        {
            case "23505": // Unique Violation
                return StatusCode.AlreadyExists;
            case "23503": // Foreign Key Violation
                return StatusCode.FailedPrecondition;
            case "22001": // String Data Right Truncation
            case "22P02": // Invalid Text Representation
                return StatusCode.InvalidArgument;
            case "22003": // Numeric Value Out of Range
                return StatusCode.OutOfRange;
            case "23514": // Check Violation
                return StatusCode.FailedPrecondition;
            case "40001": // Serialization Failure
            case "40P01": // Deadlock Detected
                return StatusCode.Aborted;
            case "53200": // Out of Memory
                return StatusCode.ResourceExhausted;
            case "XX000": // Internal Error
                return StatusCode.Internal;
            default:
                return StatusCode.Internal; // Default gRPC error code
        }
    }
}