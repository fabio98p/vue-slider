document.addEventListener('DOMContentLoaded', function () {
	console.log('ciao ale');

	var root = new Vue({
		el: '#root',
		data: {
			index: 0,
			hello: 'hello world',
			inrervalPrev: '',
			inrervalNext: '',
			arrayImg: [
				'https://www.zeusnews.it/img/4/8/1/6/2/0/026184-620-google-vedi-immagini.jpg',
				'https://i.etsystatic.com/11580503/r/il/f26782/1791521747/il_570xN.1791521747_3iww.jpg',
				'https://i1.wp.com/questnews.it/wp-content/uploads/2020/08/berserk-data-ritorno-manga-kentaro-miura-v3-372494-e1598423834168.jpg?fit=1200%2C675&ssl=1',
				'https://omnitos.com/wp-content/uploads/2020/12/maxresdefault-13.jpg',
			],
		},
		methods: {

			next: function () {
				if (this.index >= this.arrayImg.length - 1) {
					this.index = 0
				} else {
					this.index++
				}
				clearInterval(this.inrervalPrev);
				this.inrervalNext = setInterval(() => {
					if (this.index >= this.arrayImg.length - 1) {
						this.index = 0
					} else {
						this.index++
					}
				}, 3000)
			},
			prev: function () {
				if (this.index <= 0) {
					this.index = this.arrayImg.length - 1
				} else {
					this.index--
				}

				clearInterval(this.inrervalNext);
				this.inrervalPrev = setInterval(() => {
					if (this.index <= 0) {
						this.index = this.arrayImg.length - 1
					} else {
						this.index--
					}
				}, 3000)

			},
			stop: function () {
				clearInterval(this.inrervalPrev);
				clearInterval(this.inrervalNext);
			},
			clickDot: function (dot) {
				this.index = dot
			}
		}
	})
});