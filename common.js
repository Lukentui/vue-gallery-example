var app = new Vue({
	el: '#app',

	data: {
		links: {
			gh_repo: 'https://github.com/lukentui/vue-gallery-example',
			gh_profile: 'https://github.com/lukentui',
			telegram: 'https://t.me/lukentui',
			vk: 'https://vk.com/lukentui',
		},
		items: [],
		page: 1,
		api_key: '746bc94f68b82587a6d301f3ca1ffa4c8ff10252372bd83c58b54e1976ed3908',
	},
	methods: { 
		load: function() {
			console.log('loading: ' + this.page);

			axios.get(`https://api.unsplash.com/photos/?client_id=${this.api_key}&page=${this.page}`).then(function(response) {
				// console.log(app.items);
				// app.items.push(response.data);
				// app.page++;

				app.items = (app.items).concat(response.data);
				app.page++;
			});
		}

	},
	mounted: function() {
		this.load();
	}
});


$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
       app.load();
   }
});
