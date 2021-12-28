new Vue({
    el: '#vue-app',
    data: {
        sem: '5th_semester_students',
        job: 'Studying',
        website: 'http://www.nmit.ac.in',
        websiteTag: '<a href="http://www.nmit.ac.in">NMIT Website</a>'
    },
    methods: {
        greet: function(time){
            return 'Good ' + time + ', ' + this.sem;
        }
    }
});
