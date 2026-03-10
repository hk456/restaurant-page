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

    const heading = Object.assign(document.createElement('div'), { className: 'heading', textContent: 'Welcome to Our Restaurant' });

    const content = Object.assign(document.createElement('div'), { className: 'content' });

    container.append(heading, content);

    // Creating the sub-sections
    // About 
    const about = Object.assign(document.createElement('div'), { className: 'about' });
    const p1 = Object.assign(document.createElement('p'), {
        textContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore a expedita vel aut voluptatum quod ducimus, voluptas ad culpa recusandae mollitia dolor ea dicta accusantium deserunt officiis tenetur necessitatibus quis?'
    });
    const h1 = Object.assign(document.createElement('h3'), {
        textContent: 'Burger or smth'
    });
    about.append(p1, h1);

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
    const p2 = Object.assign(document.createElement('p'), {
        textContent: 'Hey! Pls contact us! like here - 483-343-3843-383'
    });
    const h2 = Object.assign(document.createElement('h3'), {
        textContent: 'Hey! Pls Contact Us!'
    });
    contact.append(h2, p2);


    content.append(about, hours, contact);   
    
    return container;
}