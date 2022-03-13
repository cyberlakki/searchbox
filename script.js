 var obj ={'Products':[
            {cname:"samsung" ,price:50000 , item:"laptop" },
            {cname:"samsung" ,price:50000 , item:"laptop" },
            {cname:"samsung" ,price:5000 , item:"mobile" },
            {cname:"samsung" ,price:5000 , item:"mobile" },
            {cname:"sony" ,price:25000 , item:"tablet" },
            {cname:"sony" ,price:25000 , item:"tablet" },
            {cname:"sony" ,price:20000 , item:"mobile" },
            {cname:"sony" ,price:20000 , item:"mobile" },
            {cname:"sony" ,price:200000 , item:"laptop" },
            {cname:"sony" ,price:200000 , item:"laptop" },
            {cname:"sony" ,price:20000 , item:"mobile" },
            {cname:"sony" ,price:20000 , item:"mobile" },
            {cname:"xiaomi" ,price:6000 , item:"mobile" },
            {cname:"xiaomi" ,price:6000 , item:"mobile" },
            {cname:"xiaomi" ,price:10000 , item:"tablet" },
            {cname:"xiaomi" ,price:10000 , item:"tablet" },
            {cname:"xiaomi" ,price:60000 , item:"laptop" },
            {cname:"xiaomi" ,price:60000 , item:"laptop" },
            {cname:"xiaomi" ,price:6000 , item:"mobile" },
            {cname:"xiaomi" ,price:6000 , item:"mobile" },
            {cname:"apple" ,price:50000 , item:"iphone" },
            {cname:"apple" ,price:50000 , item:"iphone" },
            {cname:"apple" ,price:500000 , item:"imac" },
            {cname:"apple" ,price:500000 , item:"imac" },
            {cname:"apple" ,price:80000 , item:"ipad" },
            {cname:"apple" ,price:80000 , item:"ipad" },
            {cname:"apple" ,price:50000 , item:"iphone" },
            {cname:"apple" ,price:50000 , item:"iphone" },
            {cname:"panasonic" ,price:8000 , item:"mobile" },
            {cname:"panasonic" ,price:8000 , item:"mobile" },
            {cname:"panasonic" ,price:10000 , item:"tablet" },
            {cname:"panasonic" ,price:10000 , item:"tablet" },
            {cname:"panasonic" ,price:80000 , item:"laptop" },
            {cname:"panasonic" ,price:80000 , item:"laptop" },
            {cname:"panasonic" ,price:8000 , item:"mobile" },
            {cname:"panasonic" ,price:8000 , item:"mobile" },
        ]}
        function filterItm(){
            var fil =document.getElementById("search").value
            if(fil.length==0){
                document.getElementById("msg").innerHTML=""
                document.getElementById("greet").innerHTML=""
                document.getElementById("warn").innerHTML="<b>Please Enter Company Name or Product Name or Price range"
            }
            else {
                document.getElementById("warn").innerHTML=""
            var newData=obj.Products.filter(function(x){
                if(x.cname.startsWith(fil)  || x.item.startsWith(fil) || x.price.toString().startsWith(fil)){
                    return x;
                }

            })
            if(newData.length==0){
                document.getElementById("msg").innerHTML=""
                document.getElementById("greet").innerHTML=""
                document.getElementById("warn").innerHTML="<b>Sorry ,  No Item Found"
            }
            else{
            var tbl ='<table border="1" width="600"><tr> <th>Index</th> <th>Company Name</th> <th>Price</th> <th>Item Type</th> </tr>'
            newData.forEach(function(x,i){
                tbl+=`<tr> <th>${i+1} </th> <th>${(x.cname).toUpperCase()} </th> <th>${x.price+" ₹"} </th> <th>${x.item} </th> </tr>`
    
            })
            
            document.getElementById("msg").innerHTML=tbl
            document.getElementById("greet").innerHTML="<b>Thank you for visiting Chetu Store"
        }
            }
        }
