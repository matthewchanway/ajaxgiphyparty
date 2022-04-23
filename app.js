

$('#form').submit(async function(e) {
        e.preventDefault();
        
        const term = $("#search").val();
       
        const res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${term}&api_key=ZcfxmD4MXdISNoRMIsb19fCGoK042Y3M`);
        console.log(res);
        let $gifArea = $("#gifarea");
        let gif = document.createElement('img');
        gif.src = res.data.data[(Math.floor(Math.random() * 50))].images.downsized.url;
        
        console.log(gif);
        $gifArea.append(gif);
    });

$('#remove').click(function() {
    
    $("img").remove();


});

    
  