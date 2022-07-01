const data = [
    {
        name: 'Abdul Rehman',
        age: 40,
        gender:'male',
        location: 'Gujranwala Pakistan',
        image: ': https://random-data-api.com/api/portraits/men/82.jpg',

    },
    {
        name: 'Hania B',
        age: 5,
        gender:'female',
        location: 'Gujranwala Pakistan',
        image: ': https://random-data-api.com/api/portraits/women/82.jpg',

    },
    {
        name: 'Muhammad Mavia',
        age: 3,
        gender:'male',
        location: 'Gujranwala Pakistan',
        image: ': https://random-data-api.com/api/portraits/men/85.jpg',

    },
];

const profiles = profileIterator(data);
const currentProfile = profiles.next().value;

document.getElementById('next').addEventListener('click', nextProfile);

function nextProfile(){
    document.getElementById('profileDisplay').innerHTML = `
    <ul class = "list-group">
    <li class = "list-group-item">Name: ${currentProfile.name}</li>
    <li class = "list-group-item">Age: ${currentProfile.age}</li>
    <li class = "list-group-item">Gender: ${currentProfile.gender}</li>
    <li class = "list-group-item">Location: ${currentProfile.location}</li>
    
    </ul>
    `;
    document.getElementById('imageDisplay').innerHTML = `<img src = ${currentProfile.image}>`
}

function profileIterator(profiles){
    let nextIndex = 0;

    return{
        next: function(){
            return nextIndex < profiles.length ?
            {value: profiles[nextIndex++], done: false}:
            {done: true}
        }
    }
}