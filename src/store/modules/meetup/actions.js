// Actions Request Subscription
export function meetSubscriptionRequest(id) {
	return {
		type: '@meet/SUBSCRIPTION_REQUEST',
		payload: { id },
	};
}

export function meetSubscriptionSuccess() {
	return {
		type: '@meet/SUBSCRIPTION_SUCCESS',
	};
}

export function meetSubscriptionFailure() {
	return {
		type: '@meet/SUBSCRIPTION_FAILURE',
	};
}

// Actions Cancel Subscription
export function meetCancelRequest(id) {
	return {
		type: '@meet/CANCEL_REQUEST',
		payload: { id },
	};
}

export function meetCancelSuccess({ status }) {
	return {
		type: '@meet/CANCEL_SUCCESS',
		payload: {
			status,
		},
	};
}

export function meetCancelFailure() {
	return {
		type: '@meet/CANCEL_FAILURE',
	};
}
