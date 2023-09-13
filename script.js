class books{
    constructor(
        color,
        price,
        title,
        author,
        published_date
    ){
        this.color = color;
        this.price = price;
        this.title = title;
        this.author = author;
        this.published_date = published_date;
    }

    discount (percentage){
        var dis = ((this.price*percentage)/100);
        var dis_price = this.price - dis;
        return dis_price
    }
}

const maths = new books("blue" , 140, "mathematics" , "Parth", "14 Fab" );
const guj = new books("back" , 180, "Gujarati" , "Liven", "19 sept" );
const sci = new books("green" , 290, "Science" , "Ayush", "24 jan" );
const ss = new books("brown" , 120, "social science" , "Meet", "15 Aug" );
const eng = new books("prin" , 340, "English" , "Nirav", "19 Dec" );

console.log(maths.discount(20));
console.log(maths)
console.log(guj)
console.log(sci)
console.log(ss)
console.log(eng)

document.querySelectorAll("main .skills li")