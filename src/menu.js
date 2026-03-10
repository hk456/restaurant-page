// menu.js 
/* 
    <div class="container" id="menu">
      <div class="beverages">
        <div class="heading"></div>
        <div class="slide">
          <div class="heading"></div>
          <div class="content"></div>
          <div class="price"></div>
          <div class="image"></div>
        </div>
        <div class="slide">
          <div class="heading"></div>
          <div class="content"></div>
          <div class="price"></div>
          <div class="image"></div>
        </div>
      </div>
    </div>
*/

function createSlide(headText, contentText, priceText){
    const slide = Object.assign(document.createElement('div'), {
      className: 'slide'
    });
    
    const headElement = Object.assign(document.createElement('div'), {
      className: 'heading',
      textContent: headText,
    });
    const contentElement = Object.assign(document.createElement('div'), {
      className: 'content',
      textContent: contentText
    });
    const priceElement = Object.assign(document.createElement('div'), {
      className: 'price',
      textContent: priceText
    });
    const img = Object.assign(document.createElement('div'), {
      className: 'image'      
    }); 

    slide.append(headElement, contentElement, priceElement, img);
    return slide;
}

export default function loadMenu() {
    const container = Object.assign(document.createElement('div'), {
        id: 'menu',
        className: 'container'
    });

    const snacks = Object.assign(document.createElement('div'), {
      className: 'head'
    });
    const slideS1 = createSlide('crispy cauliflower', 'buffalo, honey garlic BBQ, hoisin sambal, or mango habanero. Served with side of buttermilk ranch or blue cheese dipping sauce.', '11');
    const slideS2 = createSlide('garbage nachos', 'Grilled chipotle lime chicken, slow roasted pork belly, cheese, pico de gallo, guacamole, and cilantro lime crema loaded on house made corn tortilla chips.', '15')
    snacks.append(slideS1, slideS2)

    const tacos = Object.assign(document.createElement('div'), {
      className: 'head'
    });
    const slideT1 = createSlide('chicken tikka masala tacos', 'Chipotle chicken stewed in tikka masala sauce, shaved cabbage, pickled red onion, and cilantro.', '10');
    const slideT2 = createSlide('baja fish tacos', 'Fresh beer battered swai, cabbage, pico de gallo, guacamole, and cilantro lime crema.', '11')
    snacks.append(slideT1, slideT2)

    const burger = Object.assign(document.createElement('div'), {
      className: 'head'
    });
    const slideB1 = createSlide('craft burger', 'Lettuce, tomatoes, pickles, caramelized onion, American cheese, and fry sauce.  Cooked to medium-well unless requested otherwise.', '12');
    const slideB2 = createSlide('enchilada burger', 'Lettuce, tomatoes, Oaxaca cheese, queso fresco, cilantro, shaved red onion, smothered in enchilada sauce.  Cooked to medium-well unless requested otherwise.', '13');
    const slideB3 = createSlide('bbq bacon burger', 'American cheese, candied bacon, and onion rings, and honey garlic BBQ sauce. Cooked to medium-well unless requested otherwise.', '14');
    const slideB4 = createSlide('hot pastrami sandwhich', '1/2 lb shaved pastrami, Oaxaca cheese, pickled red onion, dill pickles, Dijonnaise, and pickled Fresno chilies.', '17');
    const slideB5 = createSlide('vegas-style chopped cheese', 'Seasoned chopped burger, American cheese, caramelized onion, lettuce, tomatoes, pickles, mayo, and enchilada sauce.', '13');
    burger.append(slideB1, slideB2, slideB3, slideB4, slideB5);

    container.append(snacks, tacos, burger);

    return container;

}