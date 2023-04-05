export const myToast = (options) => {
	uni.showToast({
		title: options.title,
		icon:options.icon
	})
}