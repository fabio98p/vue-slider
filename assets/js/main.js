document.addEventListener('DOMContentLoaded', function () {
	console.log('ciao ale');

	var root = new Vue({
		el: '#root',
		data: {
			hello: 'hello world',
		},
		methods: {
			helloo: function () {
				this.hello = 'hello'
			},
		}
	})
});