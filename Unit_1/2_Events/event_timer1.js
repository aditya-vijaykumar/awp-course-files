const countDown = (countdownTime) => {
    const eventEmitter = new EventEmitter();

    let currentTime = 0;

    // This will trigger the update event each passing second
    const timer = setInterval(() => {
        currentTime++;
        eventEmitter.emit('update', currentTime);

        // Check if countdown has reached to the end
        if (currentTime === countdownTime) {
            clearInterval(timer);
            eventEmitter.emit('end');
        }

        // Check if countdown will end in 2 seconds
        if (currentTime === countdownTime - 2) {
            eventEmitter.emit('end-soon');
        }
    }, 1000);
    return eventEmitter;
};