async function newUser_with_subscription(user_payload, subscription_payload, User, Subscription_Manager, Subscription) {
    try {
        subscription_payload = subscription_payload || {
            price: "0",
            plan: "Bronze",
            discount: "100",
            paymentMethod: "New Account Free Plan",
            transactionId: "randomID"
        };

        const newUser = new User(user_payload);

        // Create a new SubscriptionManager
        const newSubscriptionManager = new Subscription_Manager({
            author: newUser._id,
        });
        // Create a new Subscription
        const newSubscription = new Subscription({
            ...subscription_payload,
            author: newUser._id,
            subscriptionManager: newSubscriptionManager._id,
        });

        // Update the Test with SubscriptionManager's _id
        newUser.subscription_Manager = newSubscriptionManager._id;
        newUser.active_subscription = newSubscription._id;

        const user = await newUser.save();

        newSubscriptionManager.subscriptions_History.push(newSubscription._id);
        await newSubscriptionManager.save();

        await newSubscription.save();

        return user 
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports= newUser_with_subscription;