class Clock{
    constructor({template}){
        this.template = template;
    }
    render(){
        let date = new Date();
        let years = date.getFullYear();
        let month = date.getMonth() + 1;
        if(month < 10) month = "0" + month;
        let day = date.getDate();
        if(day < 10) day = "0" + day;
        let output = this.template.replace('y', years).replace('m',month).replace('d',day);
        console.log(output);

        
        // let hours = date.getHours();
        // if(hours < 10) hours = "0" + hours;
        // let mins = date.getMinutes();
        // if(mins < 10) mins = "0" + mins;
        // let secs = date.getSeconds();
        // if(secs<10) secs = "0" + secs;
        // let output = this.template.replace('h', hours).replace('m', mins).replace('s', secs);
        // console.log(output); 
    }

    stop(){
        crearInterval(this.timer);
    }
    start(){
        this.render();
        this.timer = setInterval(()=> this.render(), 1000)
    }
}
let clock = new Clock({template : 'y:m:d'});
clock.start();