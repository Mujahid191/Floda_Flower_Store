/* Slick Slider 1 */
$(document).ready(function() {
  $('.main_slider').slick({
    arrows: true,
    speed: 2000,
    autoplay: true,
    centerMode: true,
    centerPadding: '19%',
    slidesToShow: 1,
    prevArrow: ".main_prev_btn",
    nextArrow: ".main_next_btn",
    responsive: [
        {
            breakpoint: 1599,
            settings: {
                centerPadding: '13%',
            }
        },
        {
          breakpoint: 1530,
          settings: {
            centerPadding: '11%',
          }
      },
        {
            breakpoint: 1450,
            settings: {
              centerPadding: '9%',
            }
          },
          {
            breakpoint: 1380,
            settings: {
              centerPadding: '7%',
            }
        },
        {
          breakpoint: 1320,
          settings: {
            centerPadding: '5%',
          }
        },
        {
          breakpoint: 1260,
          settings: {
            centerMode: false,
          }
        },
        {
            breakpoint: 768,
            settings: {
                centerMode: false,
            }
        }
    ]
});
$('.slider').slick({
    infinite: true,
    autoplay: true,
    speed: 2500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: ".prev_btn",
    nextArrow: ".next_btn",
    responsive: [
      {
        breakpoint: 992,
        settings:{
          slidesToShow: 1,
        }
      }
    ]
  });
  $('.trending_slider').slick({
    infinite: true,
    autoplay: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: ".prev-btn",
    nextArrow: ".next-btn",
    responsive: [
      {
        breakpoint: 992,
        settings:{
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings:{
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings:{
          slidesToShow: 1,
        }
      }
    ]
  });
  $('.instagram_slider').slick({
    centerMode: true,
    centerPadding: '60px',
    infinite: true,
    slidesToShow: 6,
    autoplay: true,
    autoplaySpeed:500,
    speed: 2000,
    arrows: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 5
        }
      },
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 4
        }
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: '15px',
          slidesToShow: 1
        }
      }
    ]
  });
});

/*--------------- Search Box function ---------------*/
const search_show = () =>{
  const main_search = document.querySelector('.main_search');
  const search_icon = document.querySelector('.search_icon');
  main_search.classList.toggle('main_search_active'); 
  search_icon.classList.toggle('fa-xmark');
  search_icon.classList.toggle('fa-magnifying-glass');
}
/*--------------- Responsive Navbar function ---------------*/
function toggleMenu() {
  const toggleIcon = document.querySelector('.toggle-icon');
  const offcanvas = document.querySelector('.offcanvas-start');
  if(offcanvas.classList.contains('showing')){
    toggleIcon.classList.add('active');
  }else{
    toggleIcon.classList.remove('active');
  }
}
/*--------------- Bootstrap_tooltip ---------------*/
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
/*--------------- Sticky_Navbar ---------------*/
const sticky_nav = () =>{
  const header_area = document.querySelector('.header_area');
  if (window.pageYOffset >= 500) {
    header_area.classList.add("active");
  } else {
    header_area.classList.remove("active");
  }
}
window.addEventListener("scroll", sticky_nav);
/*--------------- Timer_function ---------------*/
const timer = () =>{
    const data = document.querySelectorAll('.counter');
    data.forEach(e => {
        const date = new Date(e.dataset['countdown']);
        const date_difference = date - new Date();
        if (date_difference > 0) {
            const days = Math.floor(date_difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((date_difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((date_difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((date_difference % (1000 * 60)) / 1000);
            const daysElement = e.querySelector('.day');
            const hoursElement = e.querySelector('.hour');
            const minutesElement = e.querySelector('.min');
            const secondsElement = e.querySelector('.secs');

            daysElement.textContent = days < 10 ? '0' + days : days;
            hoursElement.textContent = hours < 10 ? '0' + hours : hours;
            minutesElement.textContent = minutes < 10 ? '0' + minutes : minutes;
            secondsElement.textContent = seconds < 10 ? '0' + seconds : seconds;
        }
    });
}
setInterval(timer, 1000);
/*--------------- Timer_End ---------------*/
/*--------------- Product_Quantity_control ---------------*/
const Product_Quantity_control = () =>{
  const negative_btn = document.querySelectorAll('.negative');
  const plus_btn = document.querySelectorAll('.plus');
  const total_item = document.querySelectorAll('.total_no');
  /* Total product add by typing */
  total_item.forEach(e => {
    e.addEventListener('input', () =>{
      update_value(e);
    });
  });
    /* Total product remove by click */
  negative_btn.forEach(e => {
    e.addEventListener('click', () =>{
      /* negative button disabled when value is less to zero */
      let total_product = e.parentNode.querySelector('.total_no');
      if(parseInt(total_product.value) > 0){
         total_product.value = parseInt(total_product.value) - 1;
        update_value(total_product);
      }else{
        e.disabled = true;
      }
    })
  });
      /* Total product add by click */
  plus_btn.forEach(e => {
    e.addEventListener('click', () =>{
      /* Get Total Stock By parent tag access */
      let quantity = e.closest('.quantity');
      const total_stock = quantity.parentNode.querySelector('.stock_value');
      let total_product = e.parentNode.querySelector('.total_no');
      /* Plus button disabled when value is over to total stock */
      if(parseInt(total_product.value) < parseInt(total_stock.value)){
        total_product.value = parseInt(total_product.value) + 1;
        update_value(total_product);
      }else{
        e.disabled = true;
        update_value(total_product);
      }
    })
  });
  /* Total product price  update function */
  const update_value = (e) =>{
    let total_value = parseInt(e.value);
    let quantity = e.closest('.quantity');
    let total_stock = quantity.parentNode.querySelector('.stock_value');
    let negative_btn = quantity.querySelector('.negative');
    let plus_btn = quantity.querySelector('.plus');
    let no_stock = quantity.querySelector('.no_stock');
    let item_price = quantity.parentNode.querySelector('.item_price');
    let total_price = quantity.querySelector('.total_price');
    if(total_value == ''){
      total_value = 0;
    }else if(total_value > 0 && total_value < parseInt(total_stock.value)){
      negative_btn.disabled = false;
      plus_btn.disabled = false;
      no_stock.style.display = 'none';
    }else if(total_value > parseInt(total_stock.value)){
      no_stock.style.display = 'block';
    }else{
      no_stock.style.display = 'none';
    }
    if(total_value > parseInt(total_stock.value)){
      total_price.value = 0;
    }else{
      total_price.value = total_value * parseInt(item_price.value);
    }
  };
  };
Product_Quantity_control();

/*--------------- Mobile Navigation List Show ---------------*/

const show_nav_list = () =>{
  const plus_icon = document.querySelectorAll('.more_list');
  plus_icon.forEach(e => {
    e.addEventListener('click', () =>{
      let home_list = e.parentNode.parentNode.querySelector('.home_list');
      let icon = e.querySelector('.fa-solid');
        home_list.classList.toggle('home_list_show');
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');
    })
  });
}
show_nav_list();

/*--------------- My Account Dashboard ---------------*/
const Dashboard_nav = () =>{
  const dashboard_nav = document.querySelectorAll('.dashboard_nav');
  dashboard_nav.forEach(e => {
    e.addEventListener('click', () =>{
      dashboard_nav.forEach(ele => {
        ele.classList.remove('active_show');
      });
      e.classList.toggle('active_show');
    })
  });
}
Dashboard_nav();