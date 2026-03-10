// contact.js 

export default function loadContact() {
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

    const h = Object.assign(document.createElement('div'), {
        className: 'title'
    });
    const p = Object.assign(document.createElement('div'), {
        className: 'para'
    });

    content.append(h,p);
    container.append(heading, content, content, content);
    return container; 
}