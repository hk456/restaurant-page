// home.js
/* 
    <div class="container" id="home">
      <div class="heading"></div>
      <div class="content">
        <div class="about"></div>
        <div class="hours"></div>
        <div class="contact"></div>
      </div>
    </div>
*/

export default function loadHome(){
    const container = Object.assign(document.createElement('div'), {
        id: 'home',
        className: 'container'
    });

    const heading = Object.assign(document.createElement('div'), {
        className: 'heading',
        textContent: 'Welcome to Our Restaurant' // Adding text so you can see it!
    });

    const content = Object.assign(document.createElement('div'), {
        className: 'content'
    });

    container.append(heading, content);

    // Creating the sub-sections
    const about = Object.assign(document.createElement('div'), { className: 'about', textContent: 'About Us' });
    const hours = Object.assign(document.createElement('div'), { className: 'hours', textContent: 'Opening Hours' });
    const contact = Object.assign(document.createElement('div'), { className: 'contact', textContent: 'Contact Info' });

    content.append(about, hours, contact);   
    
    return container;
}