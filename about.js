        function togglebtn(){
            const btns=document.querySelector(".btns");
            const add=document.getElementById("add");
            const remove=document.getElementById("remove");
            const btn=document.querySelector(".btns").querySelectorAll(".a");
            btns.classList.toggle("open");
            if(btns.classList.contains("open"))
            {
                add.style.display="none";
                remove.style.display="block";
                btn.forEach((e,i)=>{
                setTimeout(()=>{
                bottom=40*i;
                e.style.bottom=bottom+"px";
                },100*i);});
            }
            else
            {
                add.style.display="block";
                remove.style.display="none";
                btn.forEach(e=>{
                e.style.bottom=0;});
            }