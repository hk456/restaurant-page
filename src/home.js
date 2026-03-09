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
    const container = Object.assign(document.createElement('div'), { id: 'home', className: 'container' });
    const p = Object.assign(document.createElement('p'));
    const h = Object.assign(document.createElement('h3'));

    const heading = Object.assign(document.createElement('div'), { className: 'heading', textContent: 'Welcome to Our Restaurant' });

    const content = Object.assign(document.createElement('div'), { className: 'content' });

    container.append(heading, content);

    // Creating the sub-sections
    // About 
    const about = Object.assign(document.createElement('div'), { className: 'about' });
    h.textContent = ''
    about.append(p, h);

    // Hours
    const hours = Object.assign(document.createElement('div'), { className: 'hours' });
    const ul = Object.assign(document.createElement('div'));
   
    const timetable = [
        { day: "Sunday",    start: "8am", end: "8pm" },
        { day: "Monday",    start: "6am", end: "6pm" },
        { day: "Tuesday",   start: "6am", end: "6pm" },
        { day: "Wednesday", start: "6am", end: "6pm" },
        { day: "Thursday",  start: "6am", end: "10pm" },
        { day: "Friday",    start: "6am", end: "10pm" },
        { day: "Saturday",  start: "8am", end: "10pm" }
    ];

    timetable.forEach(item => {
        const li = document.createElement('div');
        li.textContent = `${item.day}: ${item.start} - ${item.end}`;
        ul.append(li);
    });

    hours.appendChild(ul);

    // Contact
    const contact = Object.assign(document.createElement('div'), { className: 'contact' });
    contact.append(h, p);

    content.append(about, hours, contact);   
    
    return container;
}