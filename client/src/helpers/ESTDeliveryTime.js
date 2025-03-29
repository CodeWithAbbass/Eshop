const ESTDeliveryTime = (created_at, days = 5) => {
    const DeliveryTime = new Date(created_at);
    const ExpectedDeliveryTime = new Date(DeliveryTime);

    // Set the time to 3 PM (15:00)
    ExpectedDeliveryTime.setHours(15, 0, 0, 0);

    // Add the specified number of days to the ExpectedDeliveryTime
    ExpectedDeliveryTime.setDate(ExpectedDeliveryTime.getDate() + days);

    // Format the date and time
    const year = ExpectedDeliveryTime.getFullYear();
    const month = ExpectedDeliveryTime.getMonth() + 1; // Month is zero-indexed, so we add 1 to get the correct month
    const date = ExpectedDeliveryTime.getDate();
    const hours = ExpectedDeliveryTime.getHours();
    const minutes = ExpectedDeliveryTime.getMinutes();
    const seconds = ExpectedDeliveryTime.getSeconds();

    const formattedDate = `${year}-${(month < 10 ? "0" : "") + month}-${
        (date < 10 ? "0" : "") + date
    }`;
    const formattedTime = `${(hours < 10 ? "0" : "") + hours}:${
        (minutes < 10 ? "0" : "") + minutes
    }:${(seconds < 10 ? "0" : "") + seconds}`;

    const result = `${formattedDate} at ${formattedTime}`;
    return result;
};

export default ESTDeliveryTime;
