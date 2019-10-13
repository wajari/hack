var a, b, c, d = [], l = 0;
    while(l < 170){
        a = Math.random()*100; a = Math.floor(a);
        b = Math.random()*100; b = Math.floor(b);
        c = a + b;
        if(c <= 247 || c >= 78){ d.push(c); }else{ d.push(a); }
        l = d.length;
    }
    console.log('Method 2:');
    console.log(d);