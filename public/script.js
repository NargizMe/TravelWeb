$(document).ready(async function(){
    const formData={};
    // open the fly list and take data from mongodb
    $(".banner-card-bottom-btn").click(async()=>{
        $('.flyes').show('slow');
        
        formData.from=$('input[name=from]').val();
        formData.to=$('input[name=to]').val();
        formData.departure=$('input[name=departure]').val();
        formData.return=$('input[name=return]').val();
        
        const data=await fetch('http://localhost:4000/api/get-fly-list').then(res=>res.json());
        
        data.list.map(fly=>{
            if(fly.from===formData.from && (fly.to===formData.to || formData.to.length===0))
            $('.fly-table').append(`
            <tr>
                <td>${fly.from}</td>
                <td>${fly.to}</td>
                <td>${fly.departure}</td>
                <td>${fly.return}</td>
              </tr>
            `)
            if(fly.to===formData.to && (fly.from===formData.from || formData.from.length===0))
            $('.fly-table').append(`
            <tr>
                <td>${fly.from}</td>
                <td>${fly.to}</td>
                <td>${fly.departure}</td>
                <td>${fly.return}</td>
              </tr>
            `)
        })
    })

    $('.flights').click(async function(){
      $('.flyes').show('slow');

      const data=await fetch('http://localhost:4000/api/get-fly-list').then(res=>res.json());
      console.log(data);
      
      data.list.map(fly=>{
        $('.fly-table').append(`
        <tr>
            <td>${fly.from}</td>
            <td>${fly.to}</td>
            <td>${fly.departure}</td>
            <td>${fly.return}</td>
          </tr>
        `)
      })
    })

    // close the fly list
    $('.close').click(function(){
      $('td').remove();
      $(this).parent().hide('slow');
    })

    // smooth scroll
    function scroll(link){
      link.preventDefault();
      let target=$(this).attr('href');
      $('html, body').stop().animate({
        scrollTop:$(target).offset().top
      },1500)
    }
    
    $('.contact ').click(scroll)
    $('.blog-path').click(scroll)
})