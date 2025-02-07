import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_live_51QLrGR00HjbbLtoKpIMuvk8DCSIwyf4XPXclFyb28qoiXvZa8i6ZJVcsu2GuL8yh1sbtKMUYMMzVhhqgYVsqvCUF007OxAN0mZ');

export default stripePromise;