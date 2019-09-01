export const openAlert = alert => ({
	type: "ALERT_OPEN",
	alert
});

export const closeAlert = () => ({
	type: "ALERT_CLOSE",
	alert: {}
});