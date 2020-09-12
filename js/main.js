$(document).ready(function(){

  // Slider

    $('.galeria').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        responsive: true,
        pager: true
      });

  // Posts

  var posts = [
    {
      title: 'Prueba de titulo 1',
      date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus, enim quis fermentum rhoncus, dolor erat pellentesque mauris, ut molestie sem ex at sem.'
    },
    {
      title: 'Prueba de titulo 2',
      date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus, enim quis fermentum rhoncus, dolor erat pellentesque mauris, ut molestie sem ex at sem.'
    },
    {
      title: 'Prueba de titulo 3',
      date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus, enim quis fermentum rhoncus, dolor erat pellentesque mauris, ut molestie sem ex at sem.'
    },
    {
      title: 'Prueba de titulo 4',
      date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus, enim quis fermentum rhoncus, dolor erat pellentesque mauris, ut molestie sem ex at sem.'
    },
    {
      title: 'Prueba de titulo 5',
      date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus, enim quis fermentum rhoncus, dolor erat pellentesque mauris, ut molestie sem ex at sem.'
    },
  ];

  posts.forEach((item, index) => {
    var post = `
    <article class = "post">
     <h2>${item.title}</h2>
       <span class = "date">${item.date}</span>
         <p>
            ${item.content}
          </p>
        <a href = "#" class = "button-more">Leer Más</a>
    </article>
    `;
    $("#posts").append(post);
  });
});