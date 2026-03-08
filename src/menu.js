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

function createChild(type){
    const heading = Object.assign(document.createElement('div'), {
        className: 'heading'
    });
    const content = Object.assign(document.createElement('div'), {
        className: 'content'
    });
}

export default function loadMenu() {
    const container = Object.assign(document.createElement('div'), {
        id: 'menu',
        className: 'container'
    });

}