using System;
using System.Linq.Expressions;

namespace Volo.Abp.EventBus.Distributed;

public class AbpEventBusBoxesOptions
{
    /// <summary>
    /// Default: 6 hours
    /// </summary>
    public TimeSpan CleanOldEventTimeIntervalSpan { get; set; }

    /// <summary>
    /// Default: 1000
    /// </summary>
    public int InboxWaitingEventMaxCount { get; set; }

    /// <summary>
    /// Default: null, means all events
    /// </summary>
    public Expression<Func<IIncomingEventInfo, bool>>? InboxProcessorFilter { get; set; }

    /// <summary>
    /// Default: 1000
    /// </summary>
    public int OutboxWaitingEventMaxCount { get; set; }

    /// <summary>
    /// Default: null, means all events
    /// </summary>
    public Expression<Func<IOutgoingEventInfo, bool>>? OutboxProcessorFilter { get; set; }

    /// <summary>
    /// Period time of <see cref="InboxProcessor"/> and <see cref="OutboxSender"/>
    /// Default: 2 seconds
    /// </summary>
    public TimeSpan PeriodTimeSpan { get; set; }

    /// <summary>
    /// Default: 15 seconds
    /// </summary>
    public TimeSpan DistributedLockWaitDuration { get; set; }

    /// <summary>
    /// Default: 2 hours
    /// </summary>
    public TimeSpan WaitTimeToDeleteProcessedInboxEvents { get; set; }

    /// <summary>
    /// Default: true
    /// </summary>
    public bool BatchPublishOutboxEvents { get; set; }

    public AbpEventBusBoxesOptions()
    {
        CleanOldEventTimeIntervalSpan = TimeSpan.FromHours(6);
        InboxWaitingEventMaxCount = 1000;
        InboxProcessorFilter = null;
        OutboxWaitingEventMaxCount = 1000;
        OutboxProcessorFilter = null;
        PeriodTimeSpan = TimeSpan.FromSeconds(2);
        DistributedLockWaitDuration = TimeSpan.FromSeconds(15);
        WaitTimeToDeleteProcessedInboxEvents = TimeSpan.FromHours(2);
        BatchPublishOutboxEvents = true;
    }
}
